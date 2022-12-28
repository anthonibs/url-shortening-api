import styled from "styled-components";

export const CardArticle = styled.article`
	width: fit-content;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.white} ;
	border-radius: .325rem;
	padding: 0 1.6rem 3rem;
	position: relative;

	> div {
		position: absolute;
		width: 60px;
		height: 60px;
		background-color: ${({ theme }) => theme.colors.primary.colorDark};
		top: -30px;
		border-radius:  50px;

		> img {
			padding: 1rem;
			display:block;
			height: auto;
			width: 100%;
		}
	}

	 > h3 {
		font-size: 1.3rem;
		color: ${({ theme }) => theme.colors.neutral.veryViolet};
		padding: 4rem 0 1.6rem;
	}

	> p {
		color: ${({ theme }) => theme.colors.neutral.grayish};
		line-height: 1.6;
	}
`;