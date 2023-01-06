import styled from "styled-components";

import imageBackgroundBanner from "../../assets/svg/illustration-working.svg";

import backgroundShortenMobile from "../../assets/svg/bg-shorten-mobile.svg";
import backgroundShortenDesktop from "../../assets/svg/bg-shorten-desktop.svg";

import backgroundBannerFooterDesktop from "../../assets/svg/bg-boost-desktop.svg";
import backgroundBannerFooterMobile from "../../assets/svg/bg-boost-mobile.svg";

export const Banner = styled.section`
	@media (min-width: 375px) {
		background-color: ${({ theme }) => theme.background};
		height: 100%;
		width: 100%;

		.container {
			align-items: center;
			display: flex;
			flex-direction: column;
			height: 100%;
			margin: 0 auto;
			padding: 2rem 0 4rem;
			width: 100%;

			.image-background {
				background: left / cover url(${imageBackgroundBanner}) no-repeat;
				height: 320px;
				margin-left: auto;
				order: 1;
				width: 90%;
			}
		}	
	}

	@media (min-width: 767px) {
		.container {
			width: 90%;
			
			.image-background {
				background: center / contain url(${imageBackgroundBanner}) no-repeat ;
				width: 100%;
			}
		}	
	}

	@media (min-width: 1000px) {
		margin: 0 auto;
		width: 80%;

		.container {
			flex-direction: row;
			margin: 0;
			width: 100%;

			.image-background {
				background: right / contain url(${imageBackgroundBanner}) no-repeat ;
				height: 320px;
				margin: 0 auto;
				order: 2;
				width: 100%;
			}
		}	
	}
`;


export const ControlBanner = styled.div`
	@media (min-width: 375px) {
		margin-top: 3rem;
		order: 2;
		width: 90%;

		h1 {
			color: ${({ theme }) => theme.colors.neutral.veryBlue};
			font-size: 40px;
			font-weight: 700;
			font-family: ${({ theme }) => theme.fontFamily};
			line-height: 1.2;
			text-align: center;
		}
		
		p {
			color: ${({ theme }) => theme.colors.neutral.grayish};
			font-family: ${({ theme }) => theme.fontFamily};
			font-size: 18px;
			font-weight: 400;
			margin-top: 1rem;
			line-height: 1.2;
			text-align: center;
		}

		> div  {
			margin: 2rem auto;

			a {
				display: block;
				margin: 0 auto;
			}
		}
	}

	@media (min-width: 767px) {
		width: 100%;

		h1 {
			font-size: 54px;
		}

		p {
			font-weight: 500;
		}

	}

	@media (min-width: 1000px) {
		order: 1;
		padding-right: 1rem;
		
		h1 {
			font-size: 64px;
			text-align: left;
		}
		
		p {
			text-align: left;
		}
		
		> div  {
			margin: 2rem auto 4rem;

			a {
				display: block;
				margin-left: 0;
			}
		}
	}

`;


export const SectionShorter = styled.section`
	@media (min-width: 375px) {
		background-color: ${({ theme }) => theme.backgroundLight};
		height: 100%;
		position: relative;
		width: 100%;

		.container-form {
			border-radius: .625rem;
			background: top right / 75% url(${backgroundShortenMobile}) no-repeat;
			background-color: ${({ theme }) => theme.colors.neutral.veryBlue};
			margin: 0 auto;
			position: relative;
			top: -50px;
			width: 90%;
		}

		ul {
			display: flex;
			height: 100%;
			flex-direction: column;
			gap: .625rem;
			list-style: none;
			max-height: 480px;
			margin: 0 auto;
			overflow-y: auto;
			padding: 0 .625rem .325rem 0;
			width: 90%;

			&::-webkit-scrollbar {
				scroll-behavior: smooth;
				width: 6px;
			}	

			&::-webkit-scrollbar-track {
				border-radius: 3px;
				background: ${({ theme }) => theme.colors.neutral.gray};
			}

			&::-webkit-scrollbar-thumb {
				border-radius: 3px;
				background: ${({ theme }) => theme.colors.primary.colorLight};
			}
		}
	}

	@media (min-width: 767px) {
		.container-form {
			background: center / cover url(${backgroundShortenDesktop}) no-repeat;
			background-color: ${({ theme }) => theme.colors.neutral.veryBlue};
			top: -70px;
			width: 80%;
		}

		ul {
			gap: 1rem;
			width: 80%;
		}
	}

`;


export const SectionCustom = styled.section`
	@media (min-width: 375px) {
		background-color: ${({ theme }) => theme.backgroundLight};
		height: 100%;
		position: relative;
		width: 100%;

		> .container {
			margin: 0 auto;
			padding: 2rem 0 6rem;
			width: 90%;

			> header {
				font-family: ${({ theme }) => theme.fontFamily};
				margin: 3rem auto 0;
				text-align: center;
				width: 100%;

				h2 {
					color: ${({ theme }) => theme.colors.neutral.veryBlue};
					font-size: 32px;
					font-family: ${({ theme }) => theme.fontFamily};
					margin-bottom: 1.6rem;
				}
				
				p {
					color: ${({ theme }) => theme.colors.neutral.grayish};
					font-family: ${({ theme }) => theme.fontFamily};
					line-height: 1.2;
					word-break: break-word;
				}
			}

			.group-cards {
				margin-top: 6rem;

				ul {
					display: flex;
					flex-direction: column;
					gap: 8rem;
					list-style: none;

					> li {
						display: flex;
						height: 100%;
						position: relative;
					}

					li:nth-child(2)::before {
						content: "";
						background-color: ${({ theme }) => theme.colors.primary.colorLight};
						height: 8rem;
						left: 50%;
						position: absolute;
						top: -8rem;
						transform: rotate(0deg) translateX(-50%);
						width: 10px;
					}
				
					li:nth-child(2)::after {
						content: "";
						bottom: -8rem;
						background-color: ${({ theme }) => theme.colors.primary.colorLight};
						height: 8rem;
						right: 50%;
						position: absolute;
						transform: rotate(0deg) translateX(50%);
						width: 10px;
					}
				}
			}
		}
	}

	@media (min-width: 767px) {
	
	> .container {
		width: 80%;

		> header {	
			h2 {
				font-size: 44px;
			}
			
			p {
				line-height: 1.6;
				width: 100%;
				word-break: break-word;
			}
		}

		.group-cards {
			
			ul {
				gap: 6rem;

				li:nth-child(2)::before {
					height: 6rem;
					top: -6rem;
				}
				
				li:nth-child(2)::after {
					bottom: -6rem;
					height: 6rem;
				}
			}
		}
	}
}

	@media (min-width: 1000px) {
	> .container {
    max-width: 1400px;
		width: 80%;

		> header {
			margin: 3rem auto 0;
			
			p {
				margin: 0 auto;
				width: 50%;
			}
		}

		.group-cards {
			
			ul {
				flex-direction: row;
				gap: 3rem;

				> li {
					width: 500px;
				}

				> li:nth-child(2) {
					padding-top: 2rem;
				}

				> li:nth-child(3) {
					padding-top: 4rem;
				}

				li:nth-child(2)::before {
					height: 10px;
					left: 0;
					top: 45%;
					width: 6rem;
				}

				li:nth-child(2)::after {
					height: 10px;
					right: 0;
					top: 52%;
					transform: translateX(100%);
					width: 3rem;
				}
			}
		}
	}
}
`;


export const BannerFooter = styled.section`
	@media (min-width: 375px) {
		align-items: center;
		background:  center / cover url(${backgroundBannerFooterMobile}) no-repeat ${({ theme }) => theme.colors.neutral.veryBlue};
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 3rem 0;
		
		h3 {
			color: ${({ theme }) => theme.colors.white};
			font-size: 1.3rem;
			font-family: ${({ theme }) => theme.fontFamily};
			margin-bottom: 1.6rem;
		}

		a {
			font-size: .825rem;
		}
	}

	@media (min-width: 767px) {
		background:  center / cover url(${backgroundBannerFooterDesktop}) no-repeat ${({ theme }) => theme.colors.neutral.veryBlue};
		padding: 5rem 0;

		h3 {
			font-size: 2rem;
		}

		a {
			font-size: 1rem;
		}
	}

	@media (min-width: 1000px) {
		h3 {
			font-size: 2.3rem;
		}

		a {
			font-size: 18px;
		}
	}
`;