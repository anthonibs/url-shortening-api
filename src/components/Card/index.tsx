import { CardArticle } from "./styles";

interface ICardProps {
	title: string;
	description: string;
	svg: string;
}


export default function Card({ title, description, svg }: ICardProps) {
	return (
		<CardArticle>
			<figure>
				<img src={svg} alt={title} />
			</figure>

			<h3>{title}</h3>

			<p>{description}</p>
		</CardArticle>
	);
}
