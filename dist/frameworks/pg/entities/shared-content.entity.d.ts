import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";
import { ReactionContent } from "./reaction-content.entity";
export declare class SharedContent extends Timestamp {
    id?: string;
    image?: string;
    tittle?: string;
    description?: string;
    user?: User;
    reactionContent?: ReactionContent;
}
