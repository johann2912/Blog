"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgSharedContentRepository = void 0;
const pg_generic_repository_1 = require("./pg-generic.repository");
class PgSharedContentRepository extends pg_generic_repository_1.PgGenericRepository {
    async findAllInformation() {
        return await this._repository.createQueryBuilder('sharedContent')
            .select(['sharedContent', 'user'])
            .leftJoinAndSelect('sharedContent.user', 'user')
            .leftJoinAndSelect('sharedContent.reactionContent', 'reactionContent')
            .getMany();
    }
    async findOneWithUserInformation(idSharedContent) {
        return await this._repository.createQueryBuilder('sharedContent')
            .select(['sharedContent', 'user'])
            .leftJoinAndSelect('sharedContent.user', 'user')
            .where('sharedContent.id = :id', { id: idSharedContent })
            .getRawOne();
    }
    ;
    async findByUserId(id) {
        return await this._repository.findOne({
            where: {
                user: id
            }
        });
    }
}
exports.PgSharedContentRepository = PgSharedContentRepository;
;
//# sourceMappingURL=pg-shared-content-repository.js.map