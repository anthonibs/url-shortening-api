import * as Yup from "yup";


export default Yup.object().shape({
	shorterLink: Yup
		.string()
		.url("Preencha o campo com uma URL válida.")
		.required("O campo nome é obrigatório.")
});