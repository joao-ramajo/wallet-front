import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, Card, CardContent, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useGetSummaryQuery } from "../hooks/useGetSummary";

export function FinancialSummary() {
	const { data, isPending, isError } = useGetSummaryQuery();

	if (isError) {
		toast.error("Erro ao buscar resumos.");
	}

	return (
		<>
			<Typography variant="h4" gutterBottom>
				Resumo financeiro
			</Typography>

			{/* Cards */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: 3,
					flexWrap: "wrap",
					mb: 4,
				}}
			>
				<Card sx={{ flex: 1, minWidth: 220 }}>
					<CardContent>
						<Box display="flex" alignItems="center" gap={1}>
							<TrendingUpIcon fontSize="small" />
							<Typography variant="subtitle2">Total recebido</Typography>
						</Box>
						<Typography variant="h6">
							{isPending ? "-" : formatCurrency(data?.total_receive)}
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ flex: 1, minWidth: 220 }}>
					<CardContent>
						<Box display="flex" alignItems="center" gap={1}>
							<TrendingDownIcon fontSize="small" />
							<Typography variant="subtitle2">Total gasto</Typography>
						</Box>
						<Typography variant="h6">
							{isPending ? "-" : formatCurrency(data?.total_expense)}
						</Typography>
					</CardContent>
				</Card>

				<Card sx={{ flex: 1, minWidth: 220 }}>
					<CardContent>
						<Box display="flex" alignItems="center" gap={1}>
							<AccountBalanceWalletIcon fontSize="small" />
							<Typography variant="subtitle2">Saldo esperado</Typography>
						</Box>
						<Typography variant="h6">
							{isPending ? "-" : formatCurrency(data?.expected_total)}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</>
	);
}
