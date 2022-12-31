import styled, { keyframes } from "styled-components";

const rotation = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


interface ILoaderContainerProps {
	width: string;
	height: string
}

export const LoaderContainer = styled.span<ILoaderContainerProps>`
  animation: ${rotation} 1s linear infinite;
  border: 3px solid ${({theme}) => theme.background};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height:${({ height }) => height};
  position: relative;
  width: ${({ width }) => width};
  
	&::after {
		content: '';  
		box-sizing: border-box;
		border-radius: 50%;
		border: 3px solid transparent;
		border-bottom-color: #047c8b;
		height: 14px;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 14px;
}
`;