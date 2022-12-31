import styled from "styled-components";

interface ICardListProps {
	isCopied: boolean;
}

export const CardListContainer = styled.article<ICardListProps>`
	align-items: center;
	border-radius: .325rem;
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.colors.neutral.veryBlue};
	display: grid;
	font-size: 1rem;
	grid-template-columns: 1fr auto;
	grid-template-rows: auto;
	gap: 1.2rem;
	padding: .825rem 1.325rem;

	> .control-group-url-original {
		p {
			user-select: none;
		}
	}

	> .control-group-shorter {
		height: 100%;
		
		> span {
			color: ${({ theme }) => theme.colors.primary.colorLight};
			user-select: none;
		}

		/* Reset do Component Button */
		button {
			background-color: ${(props) => props.isCopied ? props.theme.colors.primary.colorDark : ""};
			height: 100%;
			margin-left: 1rem;
			padding: 0;
			position: relative;
			width: 110px;
		}
	}
`;
