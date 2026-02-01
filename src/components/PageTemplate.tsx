import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";

type PageProps = {
	children: ReactNode;
};

export function PageTemplate({ children }: PageProps) {
	return (
		<Box component="section" sx={{ py: 10 }}>
			<Container maxWidth="lg">{children}</Container>
		</Box>
	);
}
