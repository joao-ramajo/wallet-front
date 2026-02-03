import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { instance, type LaravelValidationError } from "../../../api/instance";
import type { Expense } from "./useGetExpense";

export type MarkExpenseAsPaidResponse = {
	message: string;
};

type MarkExpenseAsPaidFormData = {
	id: number;
};

export const postMarkExpenseAsPaid = async (
	data: MarkExpenseAsPaidFormData,
) => {
	const response = await instance.post(`/expenses/${data.id}/mark-as-paid`);

	return response.data;
};

type MarkPaidContext = {
	previousExpenses: Expense[] | undefined;
};

export function useMarkExpenseAsPaidMutation() {
	const queryClient = useQueryClient();

	return useMutation<
		MarkExpenseAsPaidResponse,
		AxiosError<LaravelValidationError>,
		MarkExpenseAsPaidFormData,
		MarkPaidContext
	>({
		mutationFn: postMarkExpenseAsPaid,
		onSuccess: (response) => {
			queryClient.invalidateQueries({
				queryKey: ["dashboard-expenses"],
			});
			queryClient.invalidateQueries({
				queryKey: ["dashboard-summary"],
			});
			toast.success(response.message);
		},
		onMutate: async ({ id }) => {
			await queryClient.cancelQueries({ queryKey: ["dashboard-expenses"] });

			const previousExpenses = queryClient.getQueryData<Expense[]>([
				"dashboard-expenses",
			]);

			queryClient.setQueryData<Expense[]>(["dashboard-expenses"], (old) =>
				old?.map((expense) =>
					expense.id === id
						? {
								...expense,
								status: "paid",
								payment_date: new Date().toISOString(),
							}
						: expense,
				),
			);

			return { previousExpenses };
		},
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["dashboard-expenses"],
			});
			queryClient.invalidateQueries({
				queryKey: ["dashboard-summary"],
			});
		},

		onError: (error, _vars, context) => {
			if (context?.previousExpenses) {
				queryClient.setQueryData(
					["dashboard-expenses"],
					context.previousExpenses,
				);
			}

			const status = error.response?.status;
			const apiError = error.response?.data;

			if (status === 400 && apiError?.message) {
				toast.error(apiError.message);
			} else {
				toast.error("Erro inesperado ao realizar a operação.");
			}
		},
	});
}
