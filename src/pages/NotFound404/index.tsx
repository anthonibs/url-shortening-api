import { Container } from "./styles";

import notFound404 from "./not-found-404.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";



export default function NotFound404() {

	const { pathname } = useLocation();
	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	return (
		<Container>
			<div>
				<div>
					<p>The requested URL <strong>{pathname}</strong> was not found on this server. Thats all we know.</p>

					<Button onClick={handleGoBack}>
						Come back
					</Button>
				</div>
				<img src={notFound404} alt="Page not found" />
			</div>
		</Container>
	);
}

