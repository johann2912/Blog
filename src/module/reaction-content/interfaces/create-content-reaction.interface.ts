import { IUser } from "src/module/user/interfaces/user.interface";
import { IContentReaction } from "./content-reaction.interface";
import { ISharedContent } from "src/module/shared-content/interfaces/shared-content.interface";

export interface ICreateContentReaction extends IContentReaction {
    typeReaction?: number;
    commentary?: string;
    user?: IUser;
    sharedContent?: ISharedContent;
};