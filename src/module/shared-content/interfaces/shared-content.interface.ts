import { IUser } from "src/module/user/interfaces/user.interface";

export interface ISharedContent {
    id?: string
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
    image?: string;
    title?: string;
    description?: string;
    user?: IUser;
};