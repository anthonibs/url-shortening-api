import { FooterContainer } from "./styles";
import { Link } from "react-router-dom";

import logo from "../../assets/svg/logo.svg";

import { ReactComponent as Facebook } from "../../assets/svg/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/svg/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/svg/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/svg/icon-instagram.svg";


export default function Footer() {
	return (
		<FooterContainer>
			<div className="container">
				<div className="logo-footer">
					<img id="logo" src={logo} alt="Logo do site Shortly" />
				</div>

				<div className="wrap">
					<div className="group-links">
						<header className="title-link">
							Features
						</header>
						<ul>
							<li>
								<Link to={"#"}>
									Link Shortening
								</Link></li>
							<li>
								<Link to="#">
									Branded Links
								</Link>
							</li>
							<li>
								<Link to={"#"}>
									Analytics
								</Link>
							</li>
						</ul>
					</div>

					<div className="group-links">
						<header className="title-link">
							Resources
						</header>
						<ul>
							<li>
								<Link to={"#"}>
									Blog
								</Link></li>
							<li>
								<Link to={"#"}>
									Developers
								</Link>
							</li>
							<li>
								<Link to={"#"}>
									Support
								</Link>
							</li>
						</ul>
					</div>

					<div className="group-links">
						<header className="title-link">
							Company
						</header>
						<ul>
							<li>
								<Link to={"#"}>
									About
								</Link>
							</li>
							<li>
								<Link to={"#"}>
									Our Team
								</Link>
							</li>
							<li>
								<Link to={"#"}>
									Careers
								</Link>
							</li>
							<li>
								<Link to={"#"}>
									Contact
								</Link>
							</li>
						</ul>
					</div>


					<div className="group-media">
						<Facebook />
						<Twitter />
						<Pinterest />
						<Instagram />
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}
