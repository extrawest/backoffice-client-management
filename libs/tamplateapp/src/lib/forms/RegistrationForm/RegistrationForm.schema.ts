import {
	object,
	string,
	ref
} from "yup";

export const validateShema = () => object({
	firstName: string().max(255).required(),
	lastName: string().max(255).required(),
	email: string().email().max(255).required(),
	password: string().max(255).required(),
	confirmPassword: string().oneOf([ref("password"), null]),
});
