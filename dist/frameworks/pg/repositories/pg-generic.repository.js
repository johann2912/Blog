"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgGenericRepository = void 0;
class PgGenericRepository {
    constructor(repository) {
        this._repository = repository;
    }
    async findAll() {
        return this._repository.find();
    }
    ;
    async findOne(id) {
        return this._repository.findOne({
            where: {
                id
            }
        });
    }
    ;
    async create(item) {
        return this._repository.save(item);
    }
    ;
    async update(id, item) {
        this._repository.update(id, item);
    }
    ;
    async delete(id) {
        this._repository.delete(id);
    }
    ;
    async softdelete(id) {
        this._repository.softDelete(id);
    }
}
exports.PgGenericRepository = PgGenericRepository;
;
//# sourceMappingURL=pg-generic.repository.js.map