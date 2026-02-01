import { FinancialSummary } from "../components/FinancialSummary";
import { RecentExpenses } from "../components/RecentExpenses";
import ExpenseModalContextProvider from "../context/ExpenseModalContextProvider";

export const DashbaordPage = () => {
	return (
		<ExpenseModalContextProvider>
			<FinancialSummary />
			<RecentExpenses />
		</ExpenseModalContextProvider>
	);
};
