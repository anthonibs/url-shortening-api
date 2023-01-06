import styled from "styled-components";

export const FooterContainer = styled.footer`
	@media (min-width: 375px) {
		background-color: ${({ theme }) => theme.colors.neutral.veryViolet};
		color: ${({ theme }) => theme.colors.neutral.grayish};
		height: 100%;
	
	> .container {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: 3rem 0 4rem;
		width: 100%;
		
		.logo-footer {
			#logo {
				height: 50px;
				pointer-events: none;
			}
		}
		
		.wrap {
			align-items: center;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			margin-top: 3rem;
			text-align: center;
			
			.group-links {
				
				.title-link {
					color: ${({ theme }) => theme.colors.white};
					font-family: ${({ theme }) => theme.fontFamily};
					font-weight: 700;
					font-size: 1rem;
					margin-bottom: 1rem;
				}
				
				ul {
					display: flex;
					flex-direction: column;
					gap: .325rem;
					list-style: none;

					li > a {
						color: ${({ theme }) => theme.colors.neutral.grayish};
						font-size: .825rem;
						font-family: ${({ theme }) => theme.fontFamily};
						font-weight: 700;
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
					margin-top: 2rem;

					svg {

						path {
							cursor: pointer;
							fill: ${({ theme }) => theme.colors.white};
							transition: fill .4s ease-in-out;

							&:hover {
								fill: ${({ theme }) => theme.colors.primary.colorLight};
							}
						}
					}
				}
			}
		}
	}

	@media (min-width: 767px) {
		
		> .container {

			.logo-footer {
				#logo {
					height: 60px;
				}
			}
			
			.wrap {
		
				.group-links {
				
					ul {
						gap: .625rem;

						li > a {
							font-size: .9rem;
						}
					}
				}
			}
		}
	}

	@media (min-width: 1000px) {
		height: 250px;
	
		> .container {
			flex-direction: row;
			justify-content: space-around;
			max-width: 1400px;
			padding: 0;
			
			.wrap {
				align-items: flex-start;
				flex-direction: row;
				gap: 5rem;
				text-align: left;

				.group-media {
					margin: 0;
				}
			}
		}
	}
`;