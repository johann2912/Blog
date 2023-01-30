import { ISharedContent } from "src/module/shared-content/interfaces/shared-content.interface";
import { IUser } from "src/module/user/interfaces/user.interface";

export interface IContentReaction {
    id?: string
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
    typeReaction?: number;
    commentary?: string;
    user?: IUser;
    sharedContent?: ISharedContent;
};