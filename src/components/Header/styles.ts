import styled from "styled-components";



export const HeaderContainer = styled.header`
	width: 100%;
	height: 70px;
	position: fixed;
	background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
	padding: 0 3rem;
	
	.flex {
		height: 100%;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 2rem;

		.container-links {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;


			nav {
				display: flex;
				gap: 2rem;
				height: 100%;
				width: fit-content;
				align-items: center;

				a {
					color: ${({ theme }) => theme.colors.neutral.grayish};
					font-weight: 500;
					font-size: 14px;
					padding: .6rem;
					transition: color .3s ease-in-out;
					
					&:hover {
						color: ${({ theme }) => theme.colors.neutral.veryBlue};
					}
				}

				.isActive {
					color: ${({ theme }) => theme.colors.neutral.veryViolet};
				}
			}

			.sign {
				a:first-child {	
					color: ${({ theme }) => theme.colors.neutral.grayish};
					font-size: 14px;
					margin-right: 1.6rem;
					padding: .6rem;
					font-weight: 500;
					transition: color .3s ease-in-out;

					&:hover {
						color: ${({ theme }) => theme.colors.neutral.veryBlue};
					}
				}
			}
		}
	}
`;