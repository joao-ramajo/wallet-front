import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api/instance";

export const getExpenses = async () => {
	const response = await instance.get("/dashboard/spreadsheet/csv/export");
	return response.data;
};

export const useGetExpensesQuery = () => {
	return useQuery({
		queryKey: ["dashboard-expenses"],
		queryFn: getExpenses,
	});
};
