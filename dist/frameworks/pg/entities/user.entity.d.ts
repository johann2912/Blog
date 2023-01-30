import { IUser } from "src/module/user/interfaces/user.interface";
import { ReactionContent } from "./reaction-content.entity";
import { SharedContent } from "./shared-content.entity";
import { Timestamp } from "./timestamp.entity";
export declare class User extends Timestamp implements IUser {
    id?: string;
    full_name?: string;
    nickname?: string;
    documentType?: number;
    documentNumber?: string;
    email?: string;
    password?: string;
    sharedContent?: SharedContent;
    reactionContent?: ReactionContent;
}
