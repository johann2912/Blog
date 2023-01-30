import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";
import { SharedContent } from "./shared-content.entity";
export declare class ReactionContent extends Timestamp {
    id?: string;
    typeReaction?: Number;
    commentary?: string;
    sharedContent?: SharedContent;
    user?: User;
}
