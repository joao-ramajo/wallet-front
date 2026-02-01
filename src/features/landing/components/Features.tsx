import {
	AccountBalanceWallet,
	Calculate,
	TrendingUp,
} from "@mui/icons-material";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

export function Features() {
	const features = [
		{
			id: 1,
			icon: AccountBalanceWallet,
			title: "Contas claras",
			description:
				"Cadastre contas de pagamento e recebimento com valores fixos ou variáveis.",
			color: "#0066FF",
			bgColor: "#E8F4FF",
		},
		{
			id: 2,
			icon: TrendingUp,
			title: "Expectativas reais",
			description:
				"Veja quanto você espera gastar e espera receber antes do mês acabar.",
			color: "#00D4FF",
			bgColor: "#E0F7FF",
		},
		{
			id: 3,
			icon: Calculate,
			title: "Impacto final",
			description:
				"O sistema calcula o saldo final projetado com base nas suas decisões financeiras.",
			color: "#0066FF",
			bgColor: "#F0F9FF",
		},
	];

	return (
		<Box
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				bgcolor: "#FFFFFF",
				position: "relative",
			}}
		>
			<Container maxWidth="lg">
				{/* Título */}
				<Box
					textAlign="center"
					sx={{
						mb: { xs: 6, md: 8 },
						maxWidth: 700,
						mx: "auto",
					}}
				>
					<Typography
						variant="overline"
						sx={{
							color: "#0066FF",
							fontWeight: 700,
							letterSpacing: "0.15em",
							fontSize: "0.875rem",
							mb: 2,
							display: "block",
						}}
					>
						O QUE O KADO FAZ
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontWeight: 800,
							color: "#1F2937",
							mb: 2,
							fontSize: { xs: "1.75rem", md: "2.5rem" },
							lineHeight: 1.2,
						}}
					>
						Ferramentas essenciais para suas finanças
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: "#6B7280",
							fontSize: { xs: "1rem", md: "1.125rem" },
							lineHeight: 1.7,
						}}
					>
						Tudo que você precisa para manter seu dinheiro organizado em um só
						lugar
					</Typography>
				</Box>

				{/* Cards */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(2, 1fr)",
							md: "repeat(3, 1fr)",
						},
						gap: { xs: 3, md: 4 },
					}}
				>
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<Card
								key={feature.id}
								elevation={0}
								sx={{
									border: "2px solid",
									borderColor: "#F3F4F6",
									borderRadius: 3,
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									position: "relative",
									overflow: "visible",
									bgcolor: "#FFFFFF",
									animation: `fadeInUp 0.6s ease-out ${feature.id * 0.15}s both`,
									"@keyframes fadeInUp": {
										from: {
											opacity: 0,
											transform: "translateY(30px)",
										},
										to: {
											opacity: 1,
											transform: "translateY(0)",
										},
									},
									"&:hover": {
										borderColor: feature.color,
										transform: "translateY(-8px)",
										boxShadow: `0 12px 24px ${feature.color}15`,
										"& .feature-icon": {
											transform: "scale(1.1) rotate(5deg)",
											bgcolor: feature.color,
											color: "#FFFFFF",
										},
										"& .feature-title": {
											color: feature.color,
										},
									},
								}}
							>
								<CardContent
									sx={{
										p: { xs: 3, md: 4 },
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									{/* Ícone */}
									<Box
										className="feature-icon"
										sx={{
											width: 64,
											height: 64,
											borderRadius: 2.5,
											bgcolor: feature.bgColor,
											color: feature.color,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											mb: 3,
											transition: "all 0.3s ease",
										}}
									>
										<IconComponent sx={{ fontSize: 32 }} />
									</Box>

									{/* Título */}
									<Typography
										className="feature-title"
										variant="h6"
										sx={{
											fontWeight: 700,
											color: "#1F2937",
											mb: 1.5,
											fontSize: { xs: "1.125rem", md: "1.25rem" },
											transition: "color 0.3s ease",
										}}
									>
										{feature.title}
									</Typography>

									{/* Descrição */}
									<Typography
										variant="body2"
										sx={{
											color: "#6B7280",
											lineHeight: 1.7,
											fontSize: { xs: "0.9rem", md: "0.95rem" },
											flexGrow: 1,
										}}
									>
										{feature.description}
									</Typography>

									{/* Decoração sutil */}
									<Box
										sx={{
											width: 40,
											height: 3,
											bgcolor: feature.bgColor,
											borderRadius: 2,
											mt: 3,
											transition: "all 0.3s ease",
										}}
									/>
								</CardContent>
							</Card>
						);
					})}
				</Box>

				{/* Seção adicional - Stats */}
				<Box
					sx={{
						mt: { xs: 8, md: 12 },
						p: { xs: 4, md: 6 },
						borderRadius: 4,
						background: "linear-gradient(135deg, #F8FBFF 0%, #E8F4FF 100%)",
						border: "2px solid #E8F4FF",
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(3, 1fr)",
						},
						gap: { xs: 4, md: 6 },
						textAlign: "center",
					}}
				>
					<Box>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 800,
								color: "#0066FF",
								mb: 1,
								fontSize: { xs: "2rem", md: "2.5rem" },
							}}
						>
							100%
						</Typography>
						<Typography
							sx={{
								color: "#6B7280",
								fontSize: { xs: "0.9rem", md: "1rem" },
								fontWeight: 500,
							}}
						>
							Gratuito
						</Typography>
					</Box>

					<Box>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 800,
								color: "#0066FF",
								mb: 1,
								fontSize: { xs: "2rem", md: "2.5rem" },
							}}
						>
							0
						</Typography>
						<Typography
							sx={{
								color: "#6B7280",
								fontSize: { xs: "0.9rem", md: "1rem" },
								fontWeight: 500,
							}}
						>
							Anúncios
						</Typography>
					</Box>

					<Box>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 800,
								color: "#0066FF",
								mb: 1,
								fontSize: { xs: "2rem", md: "2.5rem" },
							}}
						>
							∞
						</Typography>
						<Typography
							sx={{
								color: "#6B7280",
								fontSize: { xs: "0.9rem", md: "1rem" },
								fontWeight: 500,
							}}
						>
							Contas ilimitadas
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
