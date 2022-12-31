import { useEffect, useState } from "react";

// Interfaces
import IShorterProps from "../../shared/interfaces/shorter";

// Components
import Card from "../../components/Card";
import FormShorterLinks from "../../components/FormShorterLinks";
import LinkButton from "../../components/LinkButton";
import CardList from "./CardList";


// Styles
import { Banner, BannerFooter, ControlBanner, SectionCustom, SectionShorter } from "./styles";

//Json file with the information inside the cards
import db from "./db.json";

const baseURL = "https://api.shrtco.de/v2/";


export default function Home() {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [listShorter, setListShorter] = useState<IShorterProps[]>([]);


	function handleOnSubmit(url: string) {
		try {
			setIsLoading(true);
			setTimeout(async () => {
				const response = await fetch(`${baseURL}shorten?url=${url}`);
				const data = await response.json();

				if (response.ok) {
					setIsLoading(false);
					setListShorter(prev => [...prev, data.result]);
				}

				if (response.status === 400) {
					setIsLoading(false);
					throw new Error(`Ocorreu Bad Request - ${response.status}`);
				}

				if (response.status === 404) {
					setIsLoading(false);
					throw new Error(`Not Found - ${response.status}`);
				}

			}, 1000);

		} catch (error) {
			console.log(error);
		}
	}



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
					<FormShorterLinks handleOnSubmit={handleOnSubmit} isLoading={isLoading} />
				</div>
				<ul>
					{listShorter && listShorter.map((item, indice) => (
						<li key={indice}>
							<CardList
								urlOriginal={item.original_link}
								shorter={item.short_link}
							/>
						</li>
					))}
				</ul>
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
