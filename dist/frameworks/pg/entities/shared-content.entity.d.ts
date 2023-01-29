import { Timestamp } from "./timestamp.entity";
import { User } from "./user.entity";
export declare class SharedContent extends Timestamp {
    id?: string;
    image?: string;
    tittle?: string;
    description?: string;
    user?: User;
}
