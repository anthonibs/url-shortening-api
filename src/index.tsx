import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import themeStyle from "./styles/theme";
import AppRoutes from "./routes/AppRoutes";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={themeStyle}>
			<GlobalStyles />
			<AppRoutes />
		</ThemeProvider>
	</React.StrictMode>
);
