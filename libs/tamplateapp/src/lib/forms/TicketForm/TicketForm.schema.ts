import { object, string } from "yup";

export const validateShema = () => object({
	name: string().max(255).required(),
	client: string().max(255).required(),
	priority: string().max(255).required()
});
