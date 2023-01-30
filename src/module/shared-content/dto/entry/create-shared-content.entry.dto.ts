import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { ICreateSharedContent } from "../../interfaces/create-shared-content.interface";

export class SharedContentCreateEntryDto implements ICreateSharedContent {
    @ApiProperty({ required: false})
    image?: string;
    @ApiProperty({ required: false})
    title?: string;
    @ApiProperty({ required: false})
    description?: string
};