import { Link } from "react-router-dom";
import styled from "styled-components";

interface ILink {
	fontSize?: string;
}

export const LinkCustom = styled(Link)<ILink>`
	background-color: ${({ theme }) => theme.colors.primary.colorLight};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ fontSize }) => fontSize};
	padding: .625rem 1.6rem;
	border-radius: 100px;
	font-weight: 700;
	transition: background .3s ease-in-out;
	width: fit-content;

	&:hover {
		background: ${({ theme }) => theme.colors.primary.colorLightHover};
	}
`;