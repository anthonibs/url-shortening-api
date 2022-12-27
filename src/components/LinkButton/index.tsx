import { ReactElement } from "react";
import { LinkCustom } from "./styles";

interface ILinkButtonProps {
	to: string;
	children: ReactElement | string;
	fontSize?: string;
}


export default function LinkButton({ to, children, fontSize = "18px" }: ILinkButtonProps) {
	return (
		<LinkCustom to={to} fontSize={fontSize}>
			{children}
		</LinkCustom>
	);
}
