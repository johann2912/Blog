"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgReactionContentRepository = void 0;
const pg_generic_repository_1 = require("./pg-generic.repository");
class PgReactionContentRepository extends pg_generic_repository_1.PgGenericRepository {
    async findReactionsWithUserInformation() {
        return await this._repository.createQueryBuilder('contentReaction')
            .select(['contentReaction', 'user'])
            .leftJoinAndSelect('contentReaction.user', 'user')
            .leftJoinAndSelect('contentReaction.sharedContent', 'sharedContent')
            .getMany();
    }
    ;
    async findOneWithUserInformation(contentReactionId) {
        return await this._repository.createQueryBuilder('contentReaction')
            .select(['contentReaction', 'user'])
            .leftJoinAndSelect('contentReaction.user', 'user')
            .where('contentReaction.id = :id', { id: contentReactionId })
            .getRawOne();
    }
    ;
}
exports.PgReactionContentRepository = PgReactionContentRepository;
;
//# sourceMappingURL=pg-reaction-content.repository.js.map