import styled from "styled-components";

export const Container = styled.div`
	@media (min-width: 375px) {
		align-items: center;
		display: flex;
		height: 160px;
	
		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin: 0 auto;
			width: 90%;

			button {
				align-items: center;
				display: flex;
				height: 40px;
				width: 100%;
				justify-content: center;
				position: relative;

				span {
					left: 6px;
					position: absolute;
				}
			}
		}	
	}

	@media (min-width: 1000px) {
		height: 140px;
	
		form {
			flex-direction: row;

			button {
				height: 45px;
				width: fit-content;
			}
		}	
	}
`;


export const FieldsetCustom = styled.fieldset`
	@media (min-width: 375px) {
		border: none;
		position: relative;
		width: 100%;

		input {
			border-radius: .325rem;
			border: 2px solid transparent;
			color: ${({ theme }) => theme.colors.neutral.gray};
			font-size: 16px;
			height: 45px;
			outline: none;
			padding: .325rem 1.6rem;
			width: 100%;
		}

		.error {
			color: ${({ theme }) => theme.colors.secondary};
			left: 0;
			font-size: .825rem;
			position: relative;
			width: fit-content;
		}

		.error-border {
			border: 2px solid ${({ theme }) => theme.colors.secondary};
			color: ${({ theme }) => theme.colors.secondary};
			
			&::placeholder {
				color: ${({ theme }) => theme.colors.secondary};
			}
		}	
	}

	@media (min-width: 767px) {
		.error {
			bottom: -.2rem;
			font-size: 1rem;
		}
	}
`;