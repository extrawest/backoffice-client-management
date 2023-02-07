import { DocumentData } from "firebase/firestore";
import { RoleEnum } from "../enums";

export interface AuthResponse {
	access_token: string;
	isLoggedIn: boolean;
	managerInfo?: Manager;
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

export interface Manager {
	email: string;
	firstName: string;
	lastName: string;
	role: RoleEnum;
	manager_uid: string;
	photoUrl: string | null
}
