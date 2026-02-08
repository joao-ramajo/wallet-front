import toast from "react-hot-toast";
import { instance } from "../../../api/instance";

export async function downloadExpensesXlsx() {
	try {
		const response = await instance.get("/dashboard/spreadsheet/xlsx/export", {
			responseType: "blob",
		});

		const contentDisposition = response.headers["content-disposition"];
		let filename = "relatorio-de-gastos.xlsx";

		if (contentDisposition) {
			const filenameMatch = contentDisposition.match(/filename="?(.+)"?/);
			if (filenameMatch?.[1]) {
				filename = filenameMatch[1];
			}
		}

		const timestamp = new Date().toISOString().split("T")[0];
		filename = `relatorio_de_gastos${timestamp}.xlsx`;

		const blob = new Blob([response.data], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});

		const url = window.URL.createObjectURL(blob);

		const a = document.createElement("a");
		a.style.display = "none";
		a.href = url;
		a.download = filename;

		document.body.appendChild(a);
		a.click();

		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);

		toast.success("Planilha exportada com sucesso");
		return { success: true, filename };
	} catch (error) {
		toast.error("Erro ao exportar planilha");
		throw error;
	}
}
