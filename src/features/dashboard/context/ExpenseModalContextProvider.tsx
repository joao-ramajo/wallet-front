import { createContext, useCallback, useContext, useState } from "react";
import { CreateExpenseModal } from "../components/CreateExpenseModal";

type ActionType = "create" | null;

const ActionContext = createContext<{
	selectAction: (type: ActionType) => void;
	clearAction: () => void;
}>({
	selectAction: () => {},
	clearAction: () => {},
});

export const useExpenseModalContext = () => {
	if (!ActionContext) {
		throw new Error(
			"useExpenseModalContext must be used within a StockActionProvider",
		);
	}

	return useContext(ActionContext);
};

interface ExpenseModalContextProviderProps {
	children: React.ReactNode;
}

const ExpenseModalContextProvider = ({
	children,
}: ExpenseModalContextProviderProps) => {
	const [type, setType] = useState<ActionType>(null);

	const selectAction = useCallback((actionType: ActionType) => {
		setType(actionType);
	}, []);

	const clearAction = useCallback(() => {
		setType(null);
	}, []);

	return (
		<ActionContext.Provider value={{ selectAction, clearAction }}>
			<CreateExpenseModal open={type === "create"} onClose={clearAction} />
			{children}
		</ActionContext.Provider>
	);
};

export default ExpenseModalContextProvider;
