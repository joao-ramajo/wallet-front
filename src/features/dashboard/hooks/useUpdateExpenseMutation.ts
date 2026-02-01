import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { instance, type LaravelValidationError } from "../../../api/instance";
import type { UpdateExpenseFormData } from "../schemas/updateExpense.schema";

export type UpdateExpenseResponse = {
	message: string;
};

export const putUpdateExpense = async (data: UpdateExpenseFormData) => {
	const response = await instance.put(`/expenses/${data.id}`, data);

	return response.data;
};

export function useUpdateExpenseMutation() {
	return useMutation<
		UpdateExpenseResponse,
		AxiosError<LaravelValidationError>,
		UpdateExpenseFormData
	>({
		mutationFn: putUpdateExpense,
	});
}
