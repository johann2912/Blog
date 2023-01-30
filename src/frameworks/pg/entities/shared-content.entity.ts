import { Timestamp } from "./timestamp.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { ReactionContent } from "./reaction-content.entity";

@Entity()
export class SharedContent extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String})
    image?: string;
    @Column({type: String})
    tittle?: string;
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