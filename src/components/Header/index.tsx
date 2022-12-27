import { Link, NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logo from "../../assets/svg/logo.svg";
import LinkButton from "../LinkButton";

export default function Header() {


	return (
		<HeaderContainer>
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
