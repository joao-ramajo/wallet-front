import {
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	const menuItems = [
		{ label: "Apoie", to: "/apoie" },
		{ label: "Guia", to: "/guia" },
		{ label: "Recursos", to: "/recursos" },
	];

	return (
		<>
			<AppBar position="static">
				<Toolbar
					sx={{
						maxWidth: 1200,
						width: "100%",
						margin: "0 auto",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					{/* Logo */}
					<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
						<Typography variant="h6">Wallet</Typography>
					</Link>

					{/* Desktop menu */}
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: 2,
						}}
					>
						{menuItems.map((item) => (
							<Button key={item.label} color="inherit">
								{item.label}
							</Button>
						))}
						<Button variant="contained" onClick={() => navigate("/login")}>
							Entrar
						</Button>
					</Box>

					{/* Mobile menu button */}
					<IconButton
						color="inherit"
						sx={{ display: { xs: "block", md: "none" } }}
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Mobile drawer */}
			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 250 }} role="presentation">
					<List>
						{menuItems.map((item) => (
							<ListItem
								key={item.label}
								onClick={() => {
									navigate(item.to);
									setOpen(false);
								}}
							>
								<ListItemText primary={item.label} />
							</ListItem>
						))}

						<ListItem
							onClick={() => {
								navigate("/login");
								setOpen(false);
							}}
						>
							<ListItemText primary="Entrar" />
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
}
