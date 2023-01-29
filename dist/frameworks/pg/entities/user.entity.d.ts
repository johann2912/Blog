import { SharedContent } from "./shared-content.entity";
import { Timestamp } from "./timestamp.entity";
export declare class User extends Timestamp {
    id?: string;
    full_name?: string;
    nickname?: string;
    documentType?: number;
    documentNumber?: string;
    email?: string;
    password?: string;
    user?: SharedContent;
}
