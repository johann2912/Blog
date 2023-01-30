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
exports.User = void 0;
const reaction_content_entity_1 = require("./reaction-content.entity");
const shared_content_entity_1 = require("./shared-content.entity");
const timestamp_entity_1 = require("./timestamp.entity");
const typeorm_1 = require("typeorm");
let User = class User extends timestamp_entity_1.Timestamp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number }),
    __metadata("design:type", Number)
], User.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, unique: true }),
    __metadata("design:type", String)
], User.prototype, "documentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => shared_content_entity_1.SharedContent, sharedContent => sharedContent.user),
    __metadata("design:type", shared_content_entity_1.SharedContent)
], User.prototype, "sharedContent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => reaction_content_entity_1.ReactionContent, reactionContent => reactionContent.user),
    __metadata("design:type", reaction_content_entity_1.ReactionContent)
], User.prototype, "reactionContent", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
;
//# sourceMappingURL=user.entity.js.map