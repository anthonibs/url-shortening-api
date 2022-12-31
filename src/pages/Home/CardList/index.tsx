import { useState } from "react";
import { Button } from "../../../components/Button";
import { CardListContainer } from "./styles";

interface ICardListProps {
	urlOriginal: string;
	shorter: string;
}

export default function CardList({ urlOriginal, shorter }: ICardListProps) {

	const [isCopied, setIsCopied] = useState(false);

	function handleCopied() {
		setIsCopied(true);
		navigator.clipboard.writeText(shorter);
	}


	return (
		<CardListContainer isCopied={isCopied}>
			<div className="control-group-url-original">
				<p>{urlOriginal}</p>
			</div>

			<div className="control-group-shorter">
				<span>
					{`https://${shorter}`}
				</span>

				<Button type="button" onClick={handleCopied}>
					{isCopied ? "Copied!" : "Copy"}
				</Button>
			</div>
		</CardListContainer>
	);
}
