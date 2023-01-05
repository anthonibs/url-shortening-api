import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


/* HTML5 display-role reset for older browsers */
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
  text-decoration: none;
}

body {
	background: ${props => props.theme.background};
	font-size: 18px;
	font-family: ${props => props.theme.fontFamily};
  height: 100%;
	line-height: 1;
}


body::-webkit-scrollbar {
	scroll-behavior: smooth;
	width: 8px;
}	

body::-webkit-scrollbar-track {
	background: ${({ theme }) => theme.colors.neutral.gray};
}

body::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background: ${({ theme }) => theme.colors.primary.colorLight};
}
`;