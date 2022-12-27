import { Outlet } from "react-router-dom";
import { MainContainer } from "./styles";

export default function LayoutPage() {
	return (
		<MainContainer>
			<Outlet />
		</MainContainer>
	);
}
