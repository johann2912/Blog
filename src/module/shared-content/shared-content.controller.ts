import { Body, Controller, Delete, Get, Param, Post, Put, Session, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { SharedContentCreateEntryDto } from "./dto/entry/create-shared-content.entry.dto";
import { SharedContentService } from "./shared-content.service";
import { SharedContentCreateOutputDto } from "./dto/output/create-shared-content-output.dto";
import { AccessGuard } from "src/lib/guards/access.guard";
import { IAccess } from "src/lib/jwt/interfaces/access.interface";

@ApiTags('Shared Content')
@Controller('Shared_Content')
export class SharedContentController {
    constructor(
        private readonly sharedContentService: SharedContentService
    ) { };

    @Get('all')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: [SharedContentCreateOutputDto] })
    public async allUsers(
        @Session() payload: IAccess
    ) {
        const sharedContent = await this.sharedContentService.allSharedContent(payload.id);
        return sharedContent
    };
    @Get('by-nickname/:nickname')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SharedContentCreateOutputDto })
    public async searchByNickname(
        @Session() payload: IAccess,
        @Param('nickname') nickname: string,
    ) {
        const sharedContent = await this.sharedContentService.searchSharedContentByNicknameUser(payload.id, nickname);
        return plainToClass(SharedContentCreateOutputDto, sharedContent, { excludeExtraneousValues: true });
    };
    @Post('create')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SharedContentCreateOutputDto })
    public async create(
        @Session() payload: IAccess,
        @Body() data: SharedContentCreateEntryDto,
    ) {
        const sharedContent = await this.sharedContentService.create(payload.id, data);
        return plainToClass(SharedContentCreateOutputDto, sharedContent, { excludeExtraneousValues: true });
    };
    @Put('update/:sharedContentId')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    @ApiOkResponse({ type: SharedContentCreateOutputDto })
    public async update(
        @Session() payload: IAccess,
        @Param('sharedContentId') sharedContentId: string,
        @Body() data: SharedContentCreateEntryDto,
    ) {
        const sharedContent = await this.sharedContentService.update(payload.id, sharedContentId, data);
        return plainToClass(SharedContentCreateOutputDto, sharedContent, { excludeExtraneousValues: true });
    };
    @Delete('delete/:sharedContentId')
    @UseGuards(AccessGuard)
    @ApiBearerAuth()
    async delete(
        @Session() payload: IAccess,
        @Param('sharedContentId') sharedContentId: string,
    ) {
        const sharedContent = await this.sharedContentService.delete(payload.id, sharedContentId);
        return plainToClass(SharedContentCreateOutputDto, sharedContent, { excludeExtraneousValues: true });
    };
};