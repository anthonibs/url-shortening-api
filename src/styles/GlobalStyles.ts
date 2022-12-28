import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


/* HTML5 display-role reset for older browsers */
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
	scroll-behavior: smooth;
	margin: 0;
	padding: 0;
}

body {
	line-height: 1;
  height: 100%;
	font-family: ${props => props.theme.fontFamily};
	background: ${props => props.theme.background};
	font-size: 18px;
}
`;