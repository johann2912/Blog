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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionContent = void 0;
const timestamp_entity_1 = require("./timestamp.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const shared_content_entity_1 = require("./shared-content.entity");
let ReactionContent = class ReactionContent extends timestamp_entity_1.Timestamp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ReactionContent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number }),
    __metadata("design:type", Number)
], ReactionContent.prototype, "typeReaction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], ReactionContent.prototype, "commentary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => shared_content_entity_1.SharedContent, sharedContent => sharedContent.reactionContent),
    __metadata("design:type", shared_content_entity_1.SharedContent)
], ReactionContent.prototype, "sharedContent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => user_entity_1.User, user => user.reactionContent),
    __metadata("design:type", user_entity_1.User)
], ReactionContent.prototype, "user", void 0);
ReactionContent = __decorate([
    (0, typeorm_1.Entity)()
], ReactionContent);
exports.ReactionContent = ReactionContent;
;
//# sourceMappingURL=reaction-content.entity.js.map