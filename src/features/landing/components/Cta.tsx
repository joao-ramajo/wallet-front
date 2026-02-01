import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Cta() {
	const navigate = useNavigate();

	return (
		<Box
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				bgcolor: "#F8FBFF",
			}}
		>
			<Container maxWidth="md">
				<Box
					sx={{
						bgcolor: "#FFFFFF",
						border: "2px solid #E8F4FF",
						borderRadius: 3,
						p: { xs: 4, sm: 6, md: 8 },
						textAlign: "center",
					}}
				>
					{/* Overline */}
					<Typography
						variant="overline"
						sx={{
							color: "#0066FF",
							fontWeight: 700,
							letterSpacing: "0.15em",
							fontSize: "0.75rem",
							mb: 2,
							display: "block",
						}}
					>
						COMECE AGORA
					</Typography>

					{/* Título principal */}
					<Typography
						variant="h3"
						sx={{
							fontWeight: 800,
							color: "#1F2937",
							mb: 2,
							fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
							lineHeight: 1.2,
							maxWidth: 600,
							mx: "auto",
						}}
					>
						Pare de adivinhar.
						<br />
						Veja o dinheiro como ele é.
					</Typography>

					{/* Subtítulo */}
					<Typography
						variant="body1"
						sx={{
							mb: 5,
							color: "#6B7280",
							fontSize: { xs: "1rem", md: "1.125rem" },
							lineHeight: 1.7,
							maxWidth: 500,
							mx: "auto",
						}}
					>
						Comece agora a ter controle total sobre suas finanças pessoais
					</Typography>

					{/* Botões */}
					<Box
						display="flex"
						justifyContent="center"
						gap={2}
						flexDirection={{ xs: "column", sm: "row" }}
						alignItems="center"
						sx={{
							maxWidth: 480,
							mx: "auto",
							mb: 5,
						}}
					>
						<Button
							variant="contained"
							size="large"
							endIcon={<ArrowForward />}
							onClick={() => navigate("/cadastre-se")}
							sx={{
								bgcolor: "#0066FF",
								color: "#FFFFFF",
								px: 4,
								py: 1.75,
								fontSize: "1rem",
								fontWeight: 600,
								textTransform: "none",
								borderRadius: 2,
								width: { xs: "100%", sm: "auto" },
								minWidth: { sm: 200 },
								boxShadow: "none",
								"&:hover": {
									bgcolor: "#0052CC",
									boxShadow: "none",
									"& .MuiButton-endIcon": {
										transform: "translateX(4px)",
									},
								},
								"& .MuiButton-endIcon": {
									transition: "transform 0.3s ease",
								},
							}}
						>
							Criar minha conta
						</Button>

						<Button
							variant="outlined"
							size="large"
							onClick={() => navigate("/login")}
							sx={{
								borderColor: "#0066FF",
								color: "#0066FF",
								px: 4,
								py: 1.75,
								fontSize: "1rem",
								fontWeight: 600,
								textTransform: "none",
								borderRadius: 2,
								borderWidth: 2,
								width: { xs: "100%", sm: "auto" },
								minWidth: { sm: 180 },
								"&:hover": {
									borderWidth: 2,
									bgcolor: "#F8FBFF",
								},
							}}
						>
							Explorar recursos
						</Button>
					</Box>

					{/* Trust indicators */}
					<Box
						sx={{
							pt: 4,
							borderTop: "1px solid #F3F4F6",
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							justifyContent: "center",
							alignItems: "center",
							gap: { xs: 2, sm: 5 },
						}}
					>
						<Box display="flex" alignItems="center" gap={1}>
							<Box
								sx={{
									width: 6,
									height: 6,
									borderRadius: "50%",
									bgcolor: "#10B981",
								}}
							/>
							<Typography
								sx={{
									color: "#6B7280",
									fontSize: "0.875rem",
									fontWeight: 500,
								}}
							>
								100% Gratuito
							</Typography>
						</Box>

						<Box display="flex" alignItems="center" gap={1}>
							<Box
								sx={{
									width: 6,
									height: 6,
									borderRadius: "50%",
									bgcolor: "#10B981",
								}}
							/>
							<Typography
								sx={{
									color: "#6B7280",
									fontSize: "0.875rem",
									fontWeight: 500,
								}}
							>
								Sem anúncios
							</Typography>
						</Box>

						<Box display="flex" alignItems="center" gap={1}>
							<Box
								sx={{
									width: 6,
									height: 6,
									borderRadius: "50%",
									bgcolor: "#10B981",
								}}
							/>
							<Typography
								sx={{
									color: "#6B7280",
									fontSize: "0.875rem",
									fontWeight: 500,
								}}
							>
								Configure em 30 segundos
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
