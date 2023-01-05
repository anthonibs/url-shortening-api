import styled from "styled-components";

export const Container = styled.div`
	@media (min-width: 375px) {
		padding-top: 70px;
		height: 100%;

		> div {
			margin-top: 3rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			
			> div {
					width: 80%;
					text-align: center;
					
					> p {
						font-size: 1rem;
						line-height: 1.5;
						color: ${({ theme }) => theme.colors.neutral.grayish};

					> strong {
						color: ${({ theme }) => theme.colors.neutral.veryBlue};
					}
				}

				button {
					margin-top: 1rem;
					height: 40px;
					border-radius: 20px;
				}
			}
			
			img {
				display: block;
				margin: 2rem 0;
				width: 60%;
				height: auto;
			}
		}	
	}

	@media (min-width: 767px) {
	
		> div {
			
			> div {
				text-align: left;

				p {
					font-size: 1.325rem;
				}

			}
			
			img {
				width: 50%;
			}
		}	
	}

	@media (min-width: 1000px) {
		min-height: calc(100vh - 250px);

		> div {
			max-width: 1400px;
			flex-direction: row;
	
			> div {
				width: 30%;
			}
			
			img {
				width: auto;
				height: 500px;
			}
		}	
	}
`;