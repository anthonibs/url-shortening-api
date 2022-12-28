import Card from "../../components/Card";
import FormShorterLinks from "../../components/FormShorterLinks";
import LinkButton from "../../components/LinkButton";
import { Banner, BannerFooter, ControlBanner, SectionCustom, SectionShorter } from "./styles";

import db from "./db.json";

export default function Home() {
	return (
		<>
			<Banner>
				<div className="container">
					<ControlBanner>
						<h1>
							More than just
							<br />
							shorter links
						</h1>

						<p>
							Build your brand’s recognition and get detailed insights
							<br />
							on how your links are performing.
						</p>


						<div>
							<LinkButton to="#">
								Get Started
							</LinkButton>
						</div>
					</ControlBanner>

					<div className="image-background"></div>
				</div>
			</Banner>

			<SectionShorter>
				<div className="container-form">
					<FormShorterLinks />
				</div>
			</SectionShorter>

			<SectionCustom>
				<div className="container">
					<header>
						<h2>
							Advanced Statistics
						</h2>
						<p>
							Track how your links are performing across the web with
							our advanced statistics dashboard.
						</p>
					</header>


					<div className="group-cards">
						<ul>
							{db.map(card => (
								<li key={card.id}>
									<Card
										title={card.title}
										description={card.description}
										svg={card.svg}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</SectionCustom>

			<BannerFooter>
				<h3>
					Boost your links today
				</h3>
				<LinkButton to="#">
					Get Started
				</LinkButton>
			</BannerFooter>
		</>
	);
}
