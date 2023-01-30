import { ApiProperty } from "@nestjs/swagger";
import { ICreateContentReaction } from "../../interfaces/create-content-reaction.interface";

export class ContentReactionCreateEntryDto implements ICreateContentReaction {
    @ApiProperty({ required: false})
    typeReaction?: number;
    @ApiProperty({ required: false})
    commentary?: string;
};