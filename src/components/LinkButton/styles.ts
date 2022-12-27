import { Link } from "react-router-dom";
import styled from "styled-components";

interface ILink {
	fontSize?: string;
}

export const LinkCustom = styled(Link) <ILink>`
	background-color: ${({ theme }) => theme.colors.primary.colorLight};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ fontSize }) => fontSize};
	padding: .5rem 1.6rem;
	border-radius: 100px;
	font-weight: 700;
	transition: opacity .3s ease-in-out;	

	&:hover {
		opacity: .6;
	}
`;