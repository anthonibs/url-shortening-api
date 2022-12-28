import styled from "styled-components";

export const Button = styled.button`
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary.colorLight};
	border: none;
	outline: none;
	padding: 0 2rem;
	border-radius: .325rem;
	font-weight: 700;
	font-size: 16px;
	cursor: pointer;
	width: fit-content;
	white-space: nowrap;
	transition: background .3s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.primary.colorLightHover};
	}
`;