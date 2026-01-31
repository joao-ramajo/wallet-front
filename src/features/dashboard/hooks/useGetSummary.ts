import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api/instance";

export type GetSummaryResponse = {
	total_receive: number;
	total_expense: number;
	expected_total: number;
};

export const getSummary = async (): Promise<GetSummaryResponse> => {
	const response = await instance.get("/dashboard/summary");
	return response.data;
};

export const useGetSummaryQuery = () => {
	return useQuery({
		queryKey: ["dashboard-summary"],
		queryFn: getSummary,
	});
};
