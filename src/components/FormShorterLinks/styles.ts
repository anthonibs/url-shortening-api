import styled from "styled-components";

export const Container = styled.div`
	align-items: center;
	display: flex;
	height: 140px;
	
	form {
		display: flex;
		gap: 1rem;
		margin: 0 auto;
		width: 90%;

		button {
			align-items: center;
			display: flex;
			position: relative;

			span {
				left: 6px;
				position: absolute;
			}
		}
	}
`;


export const FieldsetCustom = styled.fieldset`
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
		bottom: -1.525rem;
		color: ${({ theme }) => theme.colors.secondary};
		left: 0;
		position: absolute;
		width: fit-content;
	}

	.error-border {
		border: 2px solid ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.secondary};
		
		&::placeholder {
			color: ${({ theme }) => theme.colors.secondary};
		}
	}
`;