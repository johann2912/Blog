import { Timestamp } from "./timestamp.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { ReactionContent } from "./reaction-content.entity";
import { ISharedContent } from "src/module/shared-content/interfaces/shared-content.interface";

@Entity()
export class SharedContent extends Timestamp implements ISharedContent {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String, nullable: true})
    image?: string;
    @Column({type: String})
    title?: string;
    @Column({type: String})
    description?: string;
    @ManyToOne(
        (_type) => User, user => user.sharedContent
    )
    user?: User;
    @OneToMany(
        (_type) => ReactionContent, reactionContent => reactionContent.sharedContent
    )
    reactionContent?: ReactionContent;
};