import styled from "styled-components";

export const ContainerSection = styled.section`
	@media (min-width: 375px) {
		height: 100%;
		width: 100%;

		> article {
			margin: 0 auto;
			padding: 2rem 0;
			width: 90%;
			
			h1 {
				color: ${({ theme }) => theme.colors.neutral.veryBlue};
				font-size: 32px;
				font-family: ${({ theme }) => theme.fontFamily};
			}
			
			> .container {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				margin-top: 1rem;
				
				> div {

					> p {
						color: ${({ theme }) => theme.colors.neutral.grayish};
						font-size: 14px;
						font-family: ${({ theme }) => theme.fontFamily};
						line-height: 1.5;
						
						> span {
							color: ${({ theme }) => theme.colors.primary.colorDark};
							font-weight: 700;
						}
					}

					> a {
						display: block;
						font-size: 14px;
						margin-top: .625rem;
					}
				}

				> img {
					display: block;
					height: auto;
					margin: 0 auto;
					padding: 1rem;
					width: 80%;
				}
			}
		}
	}
	
	@media (min-width: 767px) {

		> article {
			width: 80%;
	
			h1 {
				font-size: 64px;
			}
			
			> .container {
		
				> div {

					> p {
						font-size: 18px;
					}

					> a {
						font-size: 18px;
						margin-top: 1rem;
					}
				}

				> img {
					width: 400px;
				}
			}
		}
	}

	@media (min-width: 1000px) {
		min-height: calc(100vh - 320px);

		> article {
			max-width: 1400px;
			
			> .container {
				flex-direction: row;

				> img {
					margin-left: 0;
					width: 400px;
				} 
			}
		}
	}
`;