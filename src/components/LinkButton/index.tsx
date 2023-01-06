import { ReactElement } from "react";
import { LinkCustom } from "./styles";

interface ILinkButtonProps {
	to: string;
	children: ReactElement | string;
}


export default function LinkButton({ to, children }: ILinkButtonProps) {
	return (
		<LinkCustom to={to}>
			{children}
		</LinkCustom>
	);
}
