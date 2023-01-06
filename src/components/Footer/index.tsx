import { FooterContainer } from "./styles";
import { Link } from "react-router-dom";

import logoWhite from "../../assets/svg/logo-white.svg";

import { ReactComponent as Facebook } from "../../assets/svg/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/svg/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/svg/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/svg/icon-instagram.svg";


export default function Footer() {
	return (
		<FooterContainer>
			<div className="container">
				<figure className="logo-footer">
					<img id="logo" src={logoWhite} alt="Logo do site Shortly" />
				</figure>

				<div className="wrap">
					<div className="group-links">
						<h3 className="title-link">
							Features
						</h3>
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
						<h3 className="title-link">
							Resources
						</h3>
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
						<h3 className="title-link">
							Company
						</h3>
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
