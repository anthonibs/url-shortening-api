import schema from "../../schema/Yup";

import { Field, Form, Formik } from "formik";
import { Button } from "../Button";
import { Container, FieldsetCustom } from "./styles";


interface FormValues {
	shorterLink: string;
}

export default function FormShorterLinks() {

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
					actions.setSubmitting(false);
				}}
			>
				{({ errors, touched, isValid }) => (
					<Form>
						<FieldsetCustom>
							<Field
								id="shorter-links"
								type="url"
								name="shorterLink"
								placeholder="Shorter a link here..."
							/>
							{
								touched.shorterLink && errors.shorterLink
								&& <span id="error">{errors.shorterLink}</span>
							}
						</FieldsetCustom>


						<Button type="submit" disabled={!isValid}>
							Shorten It!
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
}
