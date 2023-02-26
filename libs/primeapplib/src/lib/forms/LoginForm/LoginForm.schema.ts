import { object, string } from "yup";

export const validateShema = () => object({
	email: string().email().max(255).required(),
	password: string().max(255).required()
});
