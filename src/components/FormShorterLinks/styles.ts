import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	height: 140px;
	
	form {
		display: flex;
		margin: 0 auto;
		width: 90%;
		gap: 1rem;
	}
`;


export const FieldsetCustom = styled.fieldset`
	position: relative;
	width: 100%;
	border: none;

	input {
		height: 45px;
		width: 100%;
		border-radius: .325rem;
		padding: .325rem 1.6rem;
		color: ${({ theme }) => theme.colors.neutral.gray};
		border: 2px solid transparent;
		outline: none;
		font-size: 16px;
	}

	#error {
		position: absolute;
		left: 0;
		bottom: -1.525rem;
		color: ${({ theme }) => theme.colors.secondary};
		width: fit-content;
	}
`;