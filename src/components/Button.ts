import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.primary.colorLight};
	border: none;
	border-radius: .325rem;
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	font-weight: 700;
	font-size: 16px;
	outline: none;
	padding: 0 2rem;
	transition: background .3s ease-in-out;
	width: fit-content;
	white-space: nowrap;

	&:hover {
		background: ${({ theme }) => theme.colors.primary.colorLightHover};
	}
`;