import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { UserCreateEntryDto } from "./dto/entry/create-user.entry.dto";
import { UserCreateOutputDto } from "./dto/output/create-user.output.dto";
import { UserService } from "./user.service";

@ApiTags('Users')
@Controller('Users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { };

    @Get('all')
    @ApiOkResponse({ type: [UserCreateOutputDto] })
    public async allUsers() {
        const users = await this.userService.allUsers();
        return plainToClass(UserCreateOutputDto, users, { excludeExtraneousValues: true });
    };
    @Get('by-email/:email')
    @ApiOkResponse({ type: UserCreateOutputDto })
    public async searchUserByEmail(
        @Param('email') email: string,
    ) {
        const user = await this.userService.searchUserByEmail(email);
        return plainToClass(UserCreateOutputDto, user, { excludeExtraneousValues: true });
    };
    @Post('create')
    @ApiOperation({
        description: `In this example, it is assumed that for the document types field an internal 
            enumeration will be handled where: 0 = CC, 1 = TI, 2 = PA, 3PAE. This is handled 
            in this way due to scalability issues in the system, if in the future you want 
            to add new types of documents, only a number is attached and the database is 
            not modified.`
    })
    @ApiOkResponse({ type: UserCreateOutputDto })
    public async create(
        @Body() data: UserCreateEntryDto,
    ) {
        const user = await this.userService.create(data);
        return plainToClass(UserCreateOutputDto, user, { excludeExtraneousValues: true });
    };
    @Delete('delete/:email')
    async delete(
        @Param('email') email: string,
    ) {
        const user = await this.userService.delete(email);
        return plainToClass(UserCreateOutputDto, user, { excludeExtraneousValues: true });
    };

};