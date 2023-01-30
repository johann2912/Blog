import { IReactionContentRepository } from "../core/abstract/reaction-content-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgReactionContentRepository<T> 
    extends PgGenericRepository<T>
    implements IReactionContentRepository<T>
{
    public async findReactionsWithUserInformation(): Promise<T[]> {
        return await this._repository.createQueryBuilder('contentReaction')
            .select(['contentReaction', 'user'])
            .leftJoinAndSelect('contentReaction.user', 'user')
            .leftJoinAndSelect('contentReaction.sharedContent', 'sharedContent')
            .getMany()
    };

    public async findOneWithUserInformation(contentReactionId: string): Promise<T> {
        return await this._repository.createQueryBuilder('contentReaction')
            .select(['contentReaction', 'user'])
            .leftJoinAndSelect('contentReaction.user', 'user')
            .where('contentReaction.id = :id', { id: contentReactionId })
            .getRawOne()
    };
};