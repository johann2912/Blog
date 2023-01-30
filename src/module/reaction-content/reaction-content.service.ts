import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/pg/core/abstract/database.abstract";
import { ICreateContentReaction } from "./interfaces/create-content-reaction.interface";


@Injectable()
export class ContentReactionService {
    constructor(
        private databaseService: IDatabaseAbstract,
        private exceptions: ExceptionsService,
    ) { };

    async allContentReactionInSharedContent(id: string) {
        await this.validateIsExistUser(id);
        const allSharedContent = await this.databaseService.reactionsContent.findReactionsWithUserInformation();
        if (!allSharedContent.length) this.exceptions.notFoundException({
            message: 'Shared content does not found'
        });

        return allSharedContent;
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
    async create(
        userId: string,
        sharedContentId: string, 
        { 
            user, 
            sharedContent, 
            ...data 
        }: ICreateContentReaction
    ) {
        const userSearch = await this.validateIsExistUser(userId);
        const publication = await this.databaseService.sharedContent.findOne(sharedContentId);
        if(!publication) this.exceptions.notFoundException({
            message: 'Shared content does not found'
        });
        const contentReaction = {
            ...data,
            user: userSearch,
            sharedContent: publication,
        };

        return await this.databaseService.reactionsContent.create(contentReaction);
    };
    async update(
        userId: string,
        contentReactionId: string,
        data: ICreateContentReaction
    ) {
        const userModel = await this.validateIsExistUser(userId);
        const contentReaction = await this.databaseService.reactionsContent.findOneWithUserInformation(contentReactionId);
        if (!contentReaction || userModel.id !== contentReaction['user_id']) this.exceptions.notFoundException({
            message: 'shared content does not found.'
        });
        await this.databaseService.reactionsContent.update(contentReaction['contentReaction_id'], data) 
    
        return 'ok'
    };
    async delete(idUser: string, contentReactionId: string) {
        const user = await this.validateIsExistUser(idUser);
        const contentReaction = await this.databaseService.reactionsContent.findOneWithUserInformation(contentReactionId);
        if (user.id !== contentReaction['user_id']) this.exceptions.notFoundException({
            message: 'You cannot delete posts from other users.'
        });

        await this.databaseService.reactionsContent.softdelete(contentReaction['contentReaction_id']);
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