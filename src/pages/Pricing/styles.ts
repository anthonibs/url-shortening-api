import styled from "styled-components";

export const ContainerSection = styled.section`
	width: 100%;
	height: 100%;
  min-height: calc(100vh - 320px);

  > article {
		width: 80%;
		max-width: 1400px;
		padding: 2rem 0;
		margin: 0 auto;
		
		h1 {
			font-size: 64px;
			color: ${({ theme }) => theme.colors.neutral.veryBlue};
			font-family: ${({ theme }) => theme.fontFamily};
		}
		
		> .container {
			display: flex;
			margin-top: 2rem;
			gap: 2rem;
			
			> div {

				> p {
					font-family: ${({ theme }) => theme.fontFamily};
					color: ${({ theme }) => theme.colors.neutral.grayish};
					line-height: 1.5;
					
					> span {
						font-weight: 700;
						color: ${({ theme }) => theme.colors.primary.colorDark};
					}
				}

				> a {
					display: block;
					margin-top: 1rem;
				}
			}

			> img {
				display: block;
				width: 400px;
				height: auto;
				padding: 1rem;
			}
		}
	}
`;