import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: ${({ theme }) => theme.colors.neutral.veryViolet};
	height: 250px;
	color: ${({ theme }) => theme.colors.neutral.grayish};
	
	> .container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		padding: 3rem 0 4rem;
		
		.logo-footer {
			#logo {
				height: 50px;
			}
		}

	.wrap {
		display: flex;
		gap: 5rem;

		.group-links {

		.title-link {
			color: white;
			font-weight: 700;
			margin-bottom: 1rem;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: .6rem;

			li a {
				font-size: .9rem;
				color: ${({ theme }) => theme.colors.neutral.grayish};
				transition: color .4s ease-in-out;

				&:hover {
					color: ${({ theme }) => theme.colors.primary.colorLight};
				}
			}
		}
	}

		.group-media {
			display: flex;
			gap: 1.3rem;


			svg {
				path {
					transition: fill .4s ease-in-out;
					fill: white;
					cursor: pointer;

					&:hover {
						fill: ${({ theme }) => theme.colors.primary.colorLight};
					}
				}
			}
		}
	}
}
`;