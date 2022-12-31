import ReactDOM from "react-dom";

import { Overlay } from "./styles";
import Spinner from "../Spinner";

interface ILoaderProps {
	isLoading: boolean;
}

export default function Loader({ isLoading }: ILoaderProps) {

	if (!isLoading) {
		return null;
	}

	return ReactDOM.createPortal(
		<Overlay>
			<Spinner width="90px" height="90px" />
		</Overlay>,
		document.getElementById("loader-root") as HTMLElement,
	);
}
