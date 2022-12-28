import styled from "styled-components";

export const Container = styled.div`
	padding-top: 70px;
	height: 100%;
	min-height: calc(100vh - 250px);

	> div {
		margin-top: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		
		> div {
				width: 30%;

			p {
				font-size: 1.325rem;
				line-height: 1.5;
				color: ${({ theme }) => theme.colors.neutral.grayish};

				> strong {
					color: ${({ theme }) => theme.colors.neutral.veryBlue};
				}
			}

			button {
				margin-top: 1rem;
				height: 40px;
				border-radius: 20px;
			}
		}
		
		img {
			display: block;
			width: auto;
			height: 500px;
		}
	}
`;