export function formatCurrency(valueInCents: number | undefined) {
	if (valueInCents == null) return "0,00";

	return (valueInCents / 100).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}
