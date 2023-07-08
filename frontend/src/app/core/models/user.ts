import { Role } from "./enums/role";

export class User {
    id?: string;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    role?: Role;
}