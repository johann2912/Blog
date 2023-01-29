import { Timestamp } from "./timestamp.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { SharedContent } from "./shared-content.entity";

@Entity()
export class ReactionContent extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: Number})
    typeReaction?: Number;
    @Column({type: String})
    commentary?: string;
    @OneToMany(
        (_type) => SharedContent, sharedContent => sharedContent.reactionContent
    )
    sharedContent?: SharedContent;
    @OneToMany(
        (_type) => User, user => user.reactionContent
    )
    user?: User;
};