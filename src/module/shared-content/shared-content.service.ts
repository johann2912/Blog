import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/pg/core/abstract/database.abstract";
import { ICreateSharedContent } from "./interfaces/create-shared-content.interface";


@Injectable()
export class SharedContentService {
    constructor(
        private databaseService: IDatabaseAbstract,
        private exceptions: ExceptionsService,
    ) { };

    async allSharedContent(id: string) {
        await this.validateIsExistUser(id);

        const allSharedContent = await this.databaseService.sharedContent.findAllInformation();
        if (!allSharedContent.length) this.exceptions.notFoundException({
            message: 'Shared content does not found'
        });

        return allSharedContent
    };

    async searchSharedContentByNicknameUser(idUser: string, nickname: string) {
        await this.validateIsExistUser(idUser);
        const user = await this.databaseService.users.findByNickname(nickname);
        if (!user) this.exceptions.notFoundException({
            message: 'user does not found.'
        });
        const userSharedContent = await this.databaseService.sharedContent.findByUserId(user.id);

        return userSharedContent;
    };
    async create(id: string, { user, ...data }: ICreateSharedContent) {
        const userSearch = await this.validateIsExistUser(id);
        const sharedContent = {
            ...data,
            user: userSearch
        };

        return await this.databaseService.sharedContent.create(sharedContent);
    };
    async update(idUser: string, idSharedContent: string, data: ICreateSharedContent) {
        const user = await this.validateIsExistUser(idUser);
        const sharedContent = await this.databaseService.sharedContent.findOneWithUserInformation(idSharedContent);
        if (!sharedContent || user.id !== sharedContent['user_id']) this.exceptions.notFoundException({
            message: 'shared content does not found.'
        });
        await this.databaseService.sharedContent.update(sharedContent['sharedContent_id'], data) 
    
        return 'ok'
    };
    async delete(idUser: string, idSharedContent: string) {
        const user = await this.validateIsExistUser(idUser);
        const sharedContent = await this.databaseService.sharedContent.findOneWithUserInformation(idSharedContent);
        if (user.id !== sharedContent['user_id']) this.exceptions.notFoundException({
            message: 'You cannot delete posts from other users.'
        });

        await this.databaseService.sharedContent.softdelete(sharedContent.id);
        return 'ok'
    };
    private async validateIsExistUser(id: string) {
        const user = await this.databaseService.users.findOne(id);
        if (!user) this.exceptions.notFoundException({
            message: 'user does not permissions'
        });

        return user;
    };
}