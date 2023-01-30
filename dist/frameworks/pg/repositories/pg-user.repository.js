"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgUserRepository = void 0;
const pg_generic_repository_1 = require("./pg-generic.repository");
class PgUserRepository extends pg_generic_repository_1.PgGenericRepository {
    async findByEmail(email) {
        return await this._repository.findOne({
            where: {
                email
            }
        });
    }
    ;
    async findByDocument(documentNumber) {
        return await this._repository.findOne({
            where: {
                documentNumber
            }
        });
    }
    ;
}
exports.PgUserRepository = PgUserRepository;
;
//# sourceMappingURL=pg-user.repository.js.map