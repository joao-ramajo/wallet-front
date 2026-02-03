import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { instance, type LaravelValidationError } from "../../../api/instance";

export type DeleteExpenseResponse = {
	message: string;
};

type DeleteExpenseFormData = {
	id: number;
};

export const deleteExpense = async (data: DeleteExpenseFormData) => {
	const response = await instance.delete(`/expenses/${data.id}`);

	return response.data;
};

export function useDeleteExpenseMutation() {
	const queryClient = useQueryClient();

	return useMutation<
		DeleteExpenseResponse,
		AxiosError<LaravelValidationError>,
		DeleteExpenseFormData
	>({
		mutationFn: deleteExpense,
		onSuccess: (response) => {
			toast.success(response.message);
			queryClient.invalidateQueries({
				queryKey: ["dashboard-expenses"],
			});
			queryClient.invalidateQueries({
				queryKey: ["dashboard-summary"],
			});
		},
		onError: (error) => {
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
