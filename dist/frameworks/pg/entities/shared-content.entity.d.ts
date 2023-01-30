import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";
import { ReactionContent } from "./reaction-content.entity";
import { ISharedContent } from "src/module/shared-content/interfaces/shared-content.interface";
export declare class SharedContent extends Timestamp implements ISharedContent {
    id?: string;
    image?: string;
    title?: string;
    description?: string;
    user?: User;
    reactionContent?: ReactionContent;
}
