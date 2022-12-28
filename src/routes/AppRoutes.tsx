import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutPage from "../components/LayoutPage/LayoutPage";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../pages/Pricing";
import NotFound404 from "../pages/NotFound404";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />

			<Routes>
				<Route path="/" element={<LayoutPage />}>
					<Route index element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/pricing/:id" element={<Pricing />} />
				</Route>
				<Route path="*" element={<NotFound404 />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};


export default AppRoutes;