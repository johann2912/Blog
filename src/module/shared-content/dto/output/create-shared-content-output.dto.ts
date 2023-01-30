import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { ICreateSharedContent } from "../../interfaces/create-shared-content.interface";

export class SharedContentCreateOutputDto implements ICreateSharedContent {
    @Expose()
    id: string
    @ApiProperty()
    @Expose()
    image?: string;
    @ApiProperty()
    @Expose()
    title?: string;
    @ApiProperty()
    @Expose()
    description?: string
};