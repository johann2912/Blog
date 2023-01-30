import { Body, Controller, Delete, Get, Param, Post, Put, Session, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { ContentReactionCreateEntryDto } from "./dto/entry/create-content-reaction.entry.dto";
import { ContentReactionCreateOutputDto } from "./dto/output/create-content-reaction.output.dto";
import { AccessGuard } from "src/lib/guards/access.guard";
import { IAccess } from "src/lib/jwt/interfaces/access.interface";
import { ContentReactionService } from "./reaction-content.service";

@ApiTags('Content Reaction')
@Controller('Content_Reaction')
export class ContentReactionController {
    constructor(
        private readonly contentReactionService: ContentReactionService
    ) { };

    @Get('all')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: [ContentReactionCreateOutputDto] })
    public async allUsers(
        @Session() payload: IAccess
    ) {
        const contentReaction = await this.contentReactionService.allContentReactionInSharedContent(payload.id);
        return contentReaction
    };
    @Post('create/:sharedContentId')
    @ApiOperation({
        description: `In this example, it is assumed that the enum will be handled 
            where: 0 = LIKE, 1 = DISLIKE, 2 = ASTONISHMENT, 3 = DOUBT, 4 = FUNNYLIKE. 
            This is handled this way due to scalability issues in the system, if in 
            the future you want to add new types of documents, just attach a number 
            and the database will not be modified.`
    })
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: ContentReactionCreateOutputDto })
    public async create(
        @Session() payload: IAccess,
        @Param('sharedContentId') sharedContentId: string,
        @Body() data: ContentReactionCreateEntryDto,
    ) {
        const sharedContent = await this.contentReactionService.create(payload.id, sharedContentId, data);
        return plainToClass(ContentReactionCreateOutputDto, sharedContent, { excludeExtraneousValues: true });
    };
    @Put('update/:sharedContentId')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: ContentReactionCreateOutputDto })
    public async update(
        @Session() payload: IAccess,
        @Param('sharedContentId') sharedContentId: string,
        @Body() data: ContentReactionCreateEntryDto,
    ) {
        const contentReaction = await this.contentReactionService.update(payload.id, sharedContentId, data);
        return plainToClass(ContentReactionCreateOutputDto, contentReaction, { excludeExtraneousValues: true });
    };
    @Delete('delete/:sharedContentId')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    async delete(
        @Session() payload: IAccess,
        @Param('sharedContentId') sharedContentId: string,
    ) {
        const contentReaction = await this.contentReactionService.delete(payload.id, sharedContentId);
        return plainToClass(ContentReactionCreateOutputDto, contentReaction, { excludeExtraneousValues: true });
    };
};