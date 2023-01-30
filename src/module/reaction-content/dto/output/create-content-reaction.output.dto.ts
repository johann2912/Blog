import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { ICreateContentReaction } from "../../interfaces/create-content-reaction.interface";

export class ContentReactionCreateOutputDto implements ICreateContentReaction {
    @Expose()
    id?: string;
    @ApiProperty()
    @Expose()
    typeReaction?: number;
    @ApiProperty()
    @Expose()
    commentary?: string;
};