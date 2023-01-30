import { IUser } from "./user.interface";

export interface IUserCreate extends IUser {
    full_name?: string;
    nickname?: string;
    documentType?: number;
    documentNumber?: string;
    email?: string;
    password?: string;
};