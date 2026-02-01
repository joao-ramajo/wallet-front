import {
	CloudOff,
	Code,
	Coffee,
	Favorite,
	MonetizationOn,
	Security,
	Speed,
	TrendingUp,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Divider,
	Typography,
} from "@mui/material";
import { PageTemplate } from "../../../components/PageTemplate";

export function AboutPage() {
	return (
		<PageTemplate>
			{/* Header */}
			<Box textAlign="center" sx={{ mb: 8 }}>
				<Chip
					label="Open Source"
					size="small"
					icon={<Code sx={{ fontSize: 16 }} />}
					sx={{
						mb: 3,
						bgcolor: "#E8F4FF",
						color: "#0066FF",
						fontWeight: 600,
						border: "1px solid #0066FF20",
					}}
				/>

				<Typography
					variant="h1"
					sx={{
						fontSize: { xs: "2.5rem", md: "3.5rem" },
						fontWeight: 800,
						color: "#1F2937",
						mb: 2,
						lineHeight: 1.1,
					}}
				>
					Sobre o{" "}
					<Box component="span" sx={{ color: "#0066FF" }}>
						Kado
					</Box>
				</Typography>

				<Typography
					sx={{
						color: "#6B7280",
						fontSize: { xs: "1.125rem", md: "1.25rem" },
						maxWidth: 600,
						mx: "auto",
						lineHeight: 1.7,
					}}
				>
					Independente. Simples.
				</Typography>
			</Box>

			{/* Cards de proposta */}
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "1fr",
						md: "repeat(3, 1fr)",
					},
					gap: 3,
					mb: 8,
				}}
			>
				<Card
					elevation={0}
					sx={{
						border: "2px solid #E8F4FF",
						borderRadius: 2,
						transition: "all 0.3s ease",
						"&:hover": {
							borderColor: "#0066FF",
							transform: "translateY(-4px)",
						},
					}}
				>
					<CardContent sx={{ p: 4 }}>
						<Box
							sx={{
								width: 56,
								height: 56,
								bgcolor: "#E8F4FF",
								borderRadius: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mb: 3,
							}}
						>
							<Speed sx={{ fontSize: 32, color: "#0066FF" }} />
						</Box>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								mb: 1.5,
								color: "#1F2937",
							}}
						>
							A proposta
						</Typography>
						<Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
							Eliminar a complexidade. Registrar despesas e entradas sem
							ferramentas pesadas ou complicadas.
						</Typography>
					</CardContent>
				</Card>

				<Card
					elevation={0}
					sx={{
						border: "2px solid #E8F4FF",
						borderRadius: 2,
						transition: "all 0.3s ease",
						"&:hover": {
							borderColor: "#0066FF",
							transform: "translateY(-4px)",
						},
					}}
				>
					<CardContent sx={{ p: 4 }}>
						<Box
							sx={{
								width: 56,
								height: 56,
								bgcolor: "#E8F4FF",
								borderRadius: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mb: 3,
							}}
						>
							<CloudOff sx={{ fontSize: 32, color: "#0066FF" }} />
						</Box>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								mb: 1.5,
								color: "#1F2937",
							}}
						>
							100% gratuito
						</Typography>
						<Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
							Sem anúncios ou venda de dados. O foco é acessibilidade financeira
							real para todos.
						</Typography>
					</CardContent>
				</Card>

				<Card
					elevation={0}
					sx={{
						border: "2px solid #E8F4FF",
						borderRadius: 2,
						transition: "all 0.3s ease",
						"&:hover": {
							borderColor: "#0066FF",
							transform: "translateY(-4px)",
						},
					}}
				>
					<CardContent sx={{ p: 4 }}>
						<Box
							sx={{
								width: 56,
								height: 56,
								bgcolor: "#E8F4FF",
								borderRadius: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mb: 3,
							}}
						>
							<TrendingUp sx={{ fontSize: 32, color: "#0066FF" }} />
						</Box>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								mb: 1.5,
								color: "#1F2937",
							}}
						>
							Objetividade
						</Typography>
						<Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
							Feito para quem registra gastos rapidamente, inclusive pelo
							celular no dia a dia.
						</Typography>
					</CardContent>
				</Card>
			</Box>

			{/* Valores do projeto */}
			<Card
				elevation={0}
				sx={{
					bgcolor: "#FFFFFF",
					border: "2px solid #E8F4FF",
					borderRadius: 3,
					mb: 6,
				}}
			>
				<CardContent sx={{ p: { xs: 4, md: 6 } }}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 800,
							mb: 4,
							color: "#1F2937",
							textAlign: "center",
						}}
					>
						Por que o Kado existe?
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
						<Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
							<Security sx={{ color: "#0066FF", mt: 0.5 }} />
							<Box>
								<Typography sx={{ fontWeight: 600, color: "#1F2937", mb: 0.5 }}>
									Privacidade em primeiro lugar
								</Typography>
								<Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
									Seus dados financeiros são seus. Não vendemos, não
									compartilhamos, não analisamos para publicidade. Simples
									assim.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
							<Code sx={{ color: "#0066FF", mt: 0.5 }} />
							<Box>
								<Typography sx={{ fontWeight: 600, color: "#1F2937", mb: 0.5 }}>
									Feito por desenvolvedores, para pessoas
								</Typography>
								<Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
									Criado com tecnologia moderna e foco na experiência do
									usuário. Sem bloatware, sem features desnecessárias.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
							<MonetizationOn sx={{ color: "#0066FF", mt: 0.5 }} />
							<Box>
								<Typography sx={{ fontWeight: 600, color: "#1F2937", mb: 0.5 }}>
									Sustentável e transparente
								</Typography>
								<Typography sx={{ color: "#6B7280", lineHeight: 1.7 }}>
									Mantido através de apoio voluntário da comunidade. Sem
									investidores, sem pressão para monetizar seus dados.
								</Typography>
							</Box>
						</Box>
					</Box>
				</CardContent>
			</Card>

			{/* Seção de apoio */}
			<Card
				elevation={0}
				sx={{
					background: "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)",
					borderRadius: 3,
					overflow: "hidden",
					position: "relative",
					"&::before": {
						content: '""',
						position: "absolute",
						top: "-50%",
						right: "-20%",
						width: "400px",
						height: "400px",
						background:
							"radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
						borderRadius: "50%",
					},
				}}
			>
				<CardContent
					sx={{ p: { xs: 4, md: 6 }, position: "relative", zIndex: 1 }}
				>
					<Box textAlign="center">
						<Avatar
							sx={{
								width: 72,
								height: 72,
								bgcolor: "rgba(255, 255, 255, 0.15)",
								mx: "auto",
								mb: 3,
							}}
						>
							<Favorite sx={{ fontSize: 36, color: "#FFFFFF" }} />
						</Avatar>

						<Typography
							variant="h4"
							sx={{
								fontWeight: 800,
								mb: 2,
								color: "#FFFFFF",
								fontSize: { xs: "1.75rem", md: "2.25rem" },
							}}
						>
							Apoie o projeto
						</Typography>

						<Typography
							sx={{
								color: "rgba(255, 255, 255, 0.9)",
								mb: 4,
								fontSize: { xs: "1rem", md: "1.125rem" },
								maxWidth: 600,
								mx: "auto",
								lineHeight: 1.7,
							}}
						>
							Contribuições ajudam a manter a infraestrutura, melhorar o sistema
							e garantir que o Kado continue 100% gratuito para sempre.
						</Typography>

						<Box
							sx={{
								display: "flex",
								gap: 2,
								justifyContent: "center",
								flexDirection: { xs: "column", sm: "row" },
								maxWidth: 500,
								mx: "auto",
							}}
						>
							<Button
								variant="contained"
								size="large"
								startIcon={<Coffee />}
								sx={{
									bgcolor: "#FFFFFF",
									color: "#0066FF",
									px: 4,
									py: 1.75,
									fontSize: "1rem",
									fontWeight: 700,
									textTransform: "none",
									borderRadius: 2,
									boxShadow: "none",
									"&:hover": {
										bgcolor: "#F8FBFF",
										boxShadow: "none",
									},
								}}
							>
								Apoiar com doação
							</Button>
						</Box>

						<Divider
							sx={{
								my: 4,
								borderColor: "rgba(255, 255, 255, 0.2)",
							}}
						/>

						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								gap: 4,
								flexWrap: "wrap",
							}}
						>
							<Box textAlign="center">
								<Typography
									sx={{
										color: "#00D4FF",
										fontSize: "1.5rem",
										fontWeight: 800,
										mb: 0.5,
									}}
								>
									$0
								</Typography>
								<Typography
									sx={{
										color: "rgba(255, 255, 255, 0.8)",
										fontSize: "0.875rem",
									}}
								>
									Custo para você
								</Typography>
							</Box>

							<Box textAlign="center">
								<Typography
									sx={{
										color: "#00D4FF",
										fontSize: "1.5rem",
										fontWeight: 800,
										mb: 0.5,
									}}
								>
									0%
								</Typography>
								<Typography
									sx={{
										color: "rgba(255, 255, 255, 0.8)",
										fontSize: "0.875rem",
									}}
								>
									De seus dados vendidos
								</Typography>
							</Box>

							<Box textAlign="center">
								<Typography
									sx={{
										color: "#00D4FF",
										fontSize: "1.5rem",
										fontWeight: 800,
										mb: 0.5,
									}}
								>
									100%
								</Typography>
								<Typography
									sx={{
										color: "rgba(255, 255, 255, 0.8)",
										fontSize: "0.875rem",
									}}
								>
									Open source
								</Typography>
							</Box>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</PageTemplate>
	);
}
