import styled from "styled-components";

interface ICardListProps {
	isCopied: boolean;
}

export const CardListContainer = styled.article<ICardListProps>`
	@media (min-width: 375px) {
		align-items: center;
		border-radius: .325rem;
		background-color: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.colors.neutral.veryBlue};
		display: grid;
		font-size: .825rem;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		gap: .625rem;
		padding: 1rem;

		> .control-group-url-original {
			p {
				word-break:break-all;
				user-select: none;
			}
		}

		> .control-group-shorter {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
			width: 100%;
			
			> span {
				color: ${({ theme }) => theme.colors.primary.colorLight};
				user-select: none;
			}

			/* Reset do Component Button */
			button {
				background-color: ${(props) => props.isCopied ? props.theme.colors.primary.colorDark : ""};
				height: 35px;
				padding: 0;
				font-size: .9rem;
				position: relative;
				width: 90px;
			}
		}
	}

	@media (min-width: 767px) {
		font-size: .9rem;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		padding: .825rem 1.325rem;

		> .control-group-shorter {
			gap: 1rem;
		}
	}

	@media (min-width: 1000px) {
		> .control-group-shorter {
			/* Reset do Component Button */
			button {
				width: 110px;
			}
		}
	}
`;
