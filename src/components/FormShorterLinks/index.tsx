import schema from "../../schema/Yup";

import { Field, Form, Formik } from "formik";
import { Button } from "../Button";
import { Container, FieldsetCustom } from "./styles";
import Spinner from "../Spinner";

interface FormValues {
	shorterLink: string;
}

interface IFormShorterLinksProps {
	handleOnSubmit: (url: string) => void;
	isLoading: boolean;
}

export default function FormShorterLinks({ handleOnSubmit, isLoading }: IFormShorterLinksProps) {

	const initialValues: FormValues = {
		shorterLink: "",
	};

	return (
		<Container>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={(values, actions) => {
					console.log("Enviar: ", { values, actions });
					handleOnSubmit(values.shorterLink);
				}}
			>
				{({ errors, touched, isValid }) => (
					<Form>
						<FieldsetCustom>
							<Field
								id="shorter-links"
								type="text"
								name="shorterLink"
								placeholder="Shorter a link here..."
							/>
							{
								touched.shorterLink && errors.shorterLink
								&& <span id="error">{errors.shorterLink}</span>
							}
						</FieldsetCustom>


						<Button type="submit" disabled={!isValid}>
							{isLoading && <Spinner width={"20px"} height={"20px"} />}
							Shorten It!
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
}
