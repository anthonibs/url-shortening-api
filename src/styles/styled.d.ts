import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		background: string,
		backgroundLight: string,
		colors: {
			primary: {
				colorLight: string,
				colorDark: string,
				colorLightHover: string,
			},
			white: string,
			secondary: string,
			neutral: {
				gray: string,
				grayish: string,
				veryBlue: string,
				veryViolet: string,
			}
		},
		fontFamily: string,
	}
}