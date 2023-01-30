import { ISharedContentRepository } from "../core/abstract/shared-content-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgSharedContentRepository<T>
    extends PgGenericRepository<T>
    implements ISharedContentRepository<T>
{
    public async findAllInformation(): Promise<T[]> {
        return await this._repository.createQueryBuilder('sharedContent')
            .select(['sharedContent', 'user'])
            .leftJoinAndSelect('sharedContent.user', 'user')
            .leftJoinAndSelect('sharedContent.reactionContent', 'reactionContent')
            .getMany()
    }
    public async findOneWithUserInformation(idSharedContent: string): Promise<T> {
        return await this._repository.createQueryBuilder('sharedContent')
            .select(['sharedContent', 'user'])
            .leftJoinAndSelect('sharedContent.user', 'user')
            .where('sharedContent.id = :id', { id: idSharedContent })
            .getRawOne()
    };
    public async findByUserId(id: string): Promise<T> {
        return await this._repository.findOne({
            where: {
                user: id
            }
        });
    }
};