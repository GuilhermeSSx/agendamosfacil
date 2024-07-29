import { ReactNode } from "react";
import { MenuButtons } from "../components/menuButtons";

interface PrivateLayoutProps {
	children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
	return (
		<>
			{children}
			<MenuButtons />
		</>
	);
}