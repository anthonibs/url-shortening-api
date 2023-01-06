import { useEffect, useState } from "react";
import css from "classnames";

import { HeaderContainer, MenuHamburger } from "./styles";

import logo from "../../assets/svg/logo.svg";
import LinkButton from "../LinkButton";

import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";


export default function Header() {

	const [pageScrollPositionY, setPageScrollPositionY] = useState<number>(0);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	const width = window.innerWidth;

	function getPageYAfterScroll() {
		setPageScrollPositionY(window.scrollY);
	}

	function handleIsOpenMenu() {
		setIsOpenMenu(!isOpenMenu);
	}

	useEffect(() => {

		if (width >= 1000) {
			window.addEventListener("scroll", getPageYAfterScroll);
		}

		return () => window.removeEventListener("scroll", getPageYAfterScroll);

	}, [width]);


	return (
		<HeaderContainer
			className={pageScrollPositionY >= 100 ? "collapse-menu" : ""}
		>
			<div className={css({
				["flex"]: true,
				["background-menu"]: !isOpenMenu && width <= 1000 ? true : false,
			})}>
				<Link to={"/"}>
					<img src={logo} alt="Logo Shortly" />
				</Link>

				{width <= 1000
					&& <MenuHamburger onClick={handleIsOpenMenu}>
						<AiOutlineMenu size={34} />
					</MenuHamburger>
				}

				<div className={`container-links ${isOpenMenu ? "active-menu" : ""}`}>
					{isOpenMenu && width <= 1000
						&& <span onClick={handleIsOpenMenu}></span>
					}

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
						<Link to={"#"} >
							Login
						</Link>

						<LinkButton to={"#"}>
							Sign Up
						</LinkButton>
					</div>
				</div>
			</div>

		</HeaderContainer>
	);
}
