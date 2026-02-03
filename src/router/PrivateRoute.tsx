import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/context/AuthContext";

type PrivateRouteProps = {
	children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
}
