import { User as UserInfo } from "@firebase/auth/dist/auth-public";
import { RoleEnum } from "../enums";

export interface AuthResponse {
	access_token: string;
	isLoggedIn: boolean;
	authInfo?: UserInfo;
}

export type Role = {
	name: RoleEnum
};

export interface User {
	id: number;
	email: string;
	full_name: string;
	is_active: boolean;
	role: Array<Role>;
};
