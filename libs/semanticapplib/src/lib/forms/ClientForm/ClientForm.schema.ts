import { object, string } from "yup";

export const validateShema = () => object({
	email: string().email().max(255).required(),
	firstName: string().max(255).required(),
	lastName: string().max(255).required(),
	date: string().required()
});
