import { Link, NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logo from "../../assets/svg/logo.svg";
import LinkButton from "../LinkButton";
import { useLayoutEffect, useState } from "react";

export default function Header() {

	const [pageScrollPositionY, setPageScrollPositionY] = useState(0);

	function getPageYAfterScroll() {
		setPageScrollPositionY(window.scrollY);
	}

	useLayoutEffect(() => {
		const width = window.innerWidth;

		if (width >= 1000) {
			window.addEventListener("scroll", getPageYAfterScroll);
		}

		return () => window.removeEventListener("scroll", getPageYAfterScroll);

	}, []);
	

	return (
		<HeaderContainer
			className={pageScrollPositionY >= 100 ? "collapse-menu" : ""}
		>
			<div className="flex">
				<Link to={"/"}>
					<img src={logo} alt="Logo Shortly" />
				</Link>

				<div className="container-links">
					<nav>
						<NavLink to={"/features"} className={({ isActive }) =>
							isActive ? "isActive" : ""
						}>
							Features
						</NavLink>

						<NavLink to={"/pricing"} className={({ isActive }) =>
							isActive ? "isActive" : ""
						}>
							Pricing
						</NavLink>

						<NavLink to={"/resources"} className={({ isActive }) =>
							isActive ? "isActive" : ""
						}>
							Resources
						</NavLink>
					</nav>

					<div className="sign">
						<Link to={"#"}>
							Login
						</Link>

						<LinkButton to={"#"} fontSize="14px">
							Sign Up
						</LinkButton>
					</div>
				</div>
			</div>

		</HeaderContainer>
	);
}
