"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDatabaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
const pg_user_repository_1 = require("./repositories/pg-user.repository");
const pg_shared_content_repository_1 = require("./repositories/pg-shared-content-repository");
const pg_reaction_content_repository_1 = require("./repositories/pg-reaction-content.repository");
let PgDatabaseService = class PgDatabaseService {
    constructor(userRepository, sharedContentRepository, reactionContentRepository) {
        this.userRepository = userRepository;
        this.sharedContentRepository = sharedContentRepository;
        this.reactionContentRepository = reactionContentRepository;
    }
    ;
    onApplicationBootstrap() {
        this.users = new pg_user_repository_1.PgUserRepository(this.userRepository);
        this.sharedContent = new pg_shared_content_repository_1.PgSharedContentRepository(this.sharedContentRepository);
        this.reactionsContent = new pg_reaction_content_repository_1.PgReactionContentRepository(this.reactionContentRepository);
    }
    ;
};
PgDatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.SharedContent)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.ReactionContent)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PgDatabaseService);
exports.PgDatabaseService = PgDatabaseService;
;
//# sourceMappingURL=pg-data.service.js.map