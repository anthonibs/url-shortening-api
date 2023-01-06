import styled from "styled-components";

export const CardArticle = styled.article`
	@media (min-width: 375px) {
		background-color: ${({ theme }) => theme.colors.white} ;
		border-radius: .325rem;
		height: 100%;
		padding: 0 1.6rem 3rem;
		position: relative;
		width: fit-content;

		> figure {
			background-color: ${({ theme }) => theme.colors.primary.colorDark};
			border-radius:  50px;
			height: 60px;
			left: 50%;
			position: absolute;
			top: -30px;
			transform: translateX(-50%);
			width: 60px;

			> img {
				display:block;
				height: auto;
				padding: 1rem;
				width: 100%;
			}
		}

		> h3 {
			color: ${({ theme }) => theme.colors.neutral.veryViolet};
			font-size: 1.2rem;
			font-family: ${({ theme }) => theme.fontFamily};
			padding: 4rem 0 1.6rem;
			text-align: center;
		}
		
		> p {
			color: ${({ theme }) => theme.colors.neutral.grayish};
			font-family: ${({ theme }) => theme.fontFamily};
			font-size: 1rem;
			line-height: 1.6;
			text-align: center;
		}
	}

	@media (min-width: 767px) {
		> h3 {
			font-size: 1.3rem;
		}
	}

	@media (min-width: 1000px) {

		> h3 {
			font-size: 1.325rem;
			text-align: left;
		}

		> p {
			text-align: left;
		}
	}
`;