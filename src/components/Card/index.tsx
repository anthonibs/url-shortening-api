import { CardArticle } from "./styles";

interface ICardProps {
	title: string;
	description: string;
	svg: string;
}


export default function Card({ title, description, svg }: ICardProps) {
	return (
		<CardArticle>
			<div>
				<img src={svg} alt={title} />
			</div>

			<h3>{title}</h3>

			<p>{description}</p>
		</CardArticle>
	);
}
