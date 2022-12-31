import { LoaderContainer } from "./styles";

interface ISpinnerProps {
	width: string;
	height: string
}

export default function Spinner({ width, height }: ISpinnerProps) {
	return (
		<LoaderContainer
			width={width}
			height={height}
		/>
	);
}
