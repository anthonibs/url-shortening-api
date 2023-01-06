import styled, { keyframes } from "styled-components";

const animatedMenu = keyframes`
	from {
		height: 70px;
	}
	to {
		height: 50px;
	}
`;

const opacityMenu = keyframes`
	0% {
		opacity: 0;
	}

	25% {
		opacity: 0
	}

	50% {
		opacity: .2
	}

	100% {
		opacity: 1;
	}
`;

export const HeaderContainer = styled.header`
	@media (min-width: 375px) {
		height: 70px;
		position: fixed;
		width: 100%;
		z-index: 1000;

		.flex {
			align-items: flex-start;
			display: flex;
			height: 100%;
			margin: 0 auto;
			width: 100%;

			> a {
				padding: 1.1rem 1.6rem;
				z-index: 99999;
			}

			.container-links {
				align-items: center;
				background-color: ${({ theme }) => theme.backgroundLight};
				display: flex;
				flex-direction: column;
				height: 100%;
				position: fixed;
				right: 0;
				transform:  translateX(100%);
				transition: all .6s cubic-bezier(0.46, 0.03, 0.52, 0.96);
				width: 55%;
				z-index: 9999;

				nav {
					align-items: center;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					height: fit-content;
					margin-top: 7rem;
					order: 1;
					width: fit-content;

					a {
						color: ${({ theme }) => theme.colors.neutral.grayish};
						font-family: ${({ theme }) => theme.fontFamily};
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
					align-items: center;
					display: flex;
					flex-direction: row;
					margin-top: 5rem;
					order: 1;
					
					a:first-child {
						color: ${({ theme }) => theme.colors.neutral.grayish};
						font-size: 14px;
						font-family: ${({ theme }) => theme.fontFamily};
						font-weight: 500;
						padding: .6rem;
						transition: color .3s ease-in-out;

						&:hover {
							color: ${({ theme }) => theme.colors.neutral.veryBlue};
						}
					}
				}
			}

			.active-menu {
				border-left: 2px solid;
				transform: translateX(0%);
			}

			span {
				animation: ${opacityMenu} .6s linear alternate;
				backdrop-filter: blur(3px);
				background-color: ${({ theme }) => theme.backgroundHeader};
				display: block;
				height: 100%;
				left: -100%;
				position: fixed;
				top:0;
				width: 100%;
				z-index: 200;
			}
		}

		.background-menu {
			background-color: ${({theme}) => theme.background};
			box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
			transition: all .6s linear;
		}
	}

	@media (min-width: 767px) {
	
		.flex {

			> a {
				padding: 1.1rem 4rem;
			}

			.container-links {
				width: 70%;

				nav a {
					font-size: 16px;
				}

				.sign a:first-child {
					font-size: 16px;
					margin-right: 1rem;
				}
			}
		}
	}

	@media (min-width: 1000px) {
		background-color: ${({ theme }) => theme.backgroundHeader};
		backdrop-filter: blur(2px);
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		height: 70px;
		position: fixed;
		width: 100%;
		z-index: 1000;

		/* Animation to decrease the size of the website header */
		&.collapse-menu {
			animation: ${animatedMenu} .6s forwards;
		}
		
		.flex {
			align-items: center;
			display: flex;
			gap: 2rem;
			height: 100%;
			margin: 0 auto;
			max-width: 1400px;
			width: 80%;

			> a {
				align-items: center;
				display: flex;
				padding: 0;
			}

			.container-links {
				align-items: center;
				background: transparent;
				flex-direction: row;
				justify-content: flex-end;
				position: relative;
				transform:  translateX(0%);
				width: 100%;


				nav {
					flex-direction: row;
					gap: 2rem;
					margin-top: 0rem;

					a {
						font-size: 16px;
					}

				}

				.sign {
					margin-top: 0rem;

					a:first-child {
						font-size: 16px;
						margin-right: 1.6rem;

						&:hover {
							color: ${({ theme }) => theme.colors.neutral.veryBlue};
						}
					}
				}
			}

			.active-menu {
				border-left: none;
			}

		}
	}
`;


export const MenuHamburger = styled.div`
	@media (min-width: 375px) {
		align-items: center;
		cursor: pointer;
		display: flex;
		justify-content: center;
		position: fixed;
		right: 2rem;
		top: 1rem;
		z-index: 99999;
	}
	
	@media (min-width: 1000px) {
		display: none;
	}
`;