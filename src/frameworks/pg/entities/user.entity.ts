import { IUser } from "src/module/user/interfaces/user.interface";
import { ReactionContent } from "./reaction-content.entity";
import { SharedContent } from "./shared-content.entity";
import { Timestamp } from "./timestamp.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends Timestamp  implements IUser{
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String})
    full_name?: string;
    @Column({type: String})
    nickname?: string;
    @Column({type: Number})
    documentType?: number
    @Column({type: String, unique:true})
    documentNumber?: string;
    @Column({type: String, unique:true})
    email?: string;
    @Column({type: String})
    password?: string;
    @OneToMany(
        (_type) => SharedContent, sharedContent => sharedContent.user
    )
    sharedContent?: SharedContent;
    @OneToMany(
        (_type) => ReactionContent, reactionContent => reactionContent.user
    )
    reactionContent?: ReactionContent;
};