import { IUser } from "src/module/user/interfaces/user.interface";
import { ISharedContent } from "./shared-content.interface";

export interface ICreateSharedContent extends ISharedContent {
    image?: string;
    title?: string;
    description?: string;
    user?: IUser
};