import { useLocation } from "react-router-dom";
import pricingPlans from "../../assets/images/pricing-plans-shortening.png";
import LinkButton from "../../components/LinkButton";
import { ContainerSection } from "./styles";

export default function Pricing() {

	const { pathname } = useLocation();


	return (
		<ContainerSection>
			<article>
				<h1>Pricing</h1>
				<div className="container">
					<div>
						<p>
							Demo page of working site paths, where it has the route <span>{pathname}</span>.
						</p>
						<LinkButton to="/" >
							Back to top
						</LinkButton>
					</div>
					<img src={pricingPlans} alt="" />
				</div>
			</article>
		</ContainerSection>
	);
}
