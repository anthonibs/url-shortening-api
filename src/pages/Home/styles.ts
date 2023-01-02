import styled from "styled-components";

import imagemBackgroundBanner from "../../assets/svg/illustration-working.svg";

import ilustracao from "../../assets/svg/bg-shorten-desktop.svg";
import ilustracaoBannerFooter from "../../assets/svg/bg-boost-desktop.svg";

export const Banner = styled.section`
	width: 80%;
	max-width: 1400px;
	display: flex;
	align-items: flex-start;
	height: 560px;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.background};

	.container {
		width: 100%;
		max-width: 1400px;
		margin: 3rem auto 0;
		display: flex;
		align-items: center;
		height: 400px;

		.image-background {
			width: 50%;
			height: 100%;
			background-image: url(${imagemBackgroundBanner});
			background-repeat: no-repeat;
			background-size: contain;
			background-position: right;
		}
	}
`;


export const ControlBanner = styled.div`
	width: 50%;

	h1 {
		font-size: 64px;
		font-weight: 700;
		font-family: ${({ theme }) => theme.fontFamily};
		color: ${({ theme }) => theme.colors.neutral.veryBlue};
		line-height: 1.2;
	}

	p {
		font-size: 18px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.neutral.grayish};
		line-height: 1.5;
	}

	> div  {
		margin-top: 2rem;
	}
`;

export const SectionShorter = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.backgroundLight};

	.container-form {
		position: relative;
		top: -70px;
		width: 80%;
		background-color: ${({ theme }) => theme.colors.neutral.veryBlue};
		background-image: url(${ilustracao});
		background-size: cover;
		background-repeat: no-repeat;
		margin: 0 auto;
		border-radius: .625rem;
	}

	ul {
		width: 80%;
		height: 100%;
		max-height: 480px;
		list-style: none;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow-y: auto;
		padding: 0 .625rem .325rem 0;

		&::-webkit-scrollbar {
			width: 6px;
			scroll-behavior: smooth;
		}	

		&::-webkit-scrollbar-track {
			background: ${({theme}) => theme.colors.neutral.gray};
			border-radius: 3px;
		}

		&::-webkit-scrollbar-thumb {
			background: ${({theme}) => theme.colors.primary.colorLight};
			border-radius: 3px;
		}
	}
`;

export const SectionCustom = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.backgroundLight};

	> .container {
		width: 80%;
		margin: 0 auto;
    max-width: 1400px;
		padding: 2rem 0 6rem;

		> header {
			margin: 0 auto;
			width: 100%;
			text-align: center;
			font-family: ${({ theme }) => theme.fontFamily};
			
			h2 {
				font-size: 2.6rem;
				color: ${({ theme }) => theme.colors.neutral.veryBlue};
				margin-bottom: 1.6rem;
			}
			
			p {
				width: 40%;
				margin: 0 auto;
				color: ${({ theme }) => theme.colors.neutral.grayish};
				word-break: break-word;
				line-height: 1.6;
			}
		}

		.group-cards {
			margin-top: 6rem;

			ul {
				list-style: none;
				display: flex;
				gap: 2rem;

				> li {
					display: flex;
					height: 100%;
					position: relative;
				}

				> li:nth-child(2) {
					padding-top: 2rem;
				}

				> li:nth-child(3) {
					padding-top: 4rem;
				}

				li:nth-child(2)::before {
					content: "";
					position: absolute;
					width: 2rem;
					height: 10px;
					background-color: ${({ theme }) => theme.colors.primary.colorLight};
					left: -2rem;
					top: 45%;
				}
			
				li:nth-child(2)::after {
					content: "";
					position: absolute;
					width: 2rem;
					height: 10px;
					background-color: ${({ theme }) => theme.colors.primary.colorLight};
					right: -2rem;
					top: 45%;
				}
			}
		}
	}
`;

export const BannerFooter = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 250px;
	background-color: ${({ theme }) => theme.colors.neutral.veryBlue};
	background-image: url(${ilustracaoBannerFooter});
	background-repeat: no-repeat;
	background-size: cover;

	h3 {
		color: white;
		font-family: ${({ theme }) => theme.fontFamily};
		font-size: 2.3rem;
		margin-bottom: 1.2rem;
	}
`;