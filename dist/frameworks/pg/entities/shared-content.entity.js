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
exports.SharedContent = void 0;
const timestamp_entity_1 = require("./timestamp.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const reaction_content_entity_1 = require("./reaction-content.entity");
let SharedContent = class SharedContent extends timestamp_entity_1.Timestamp {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SharedContent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", String)
], SharedContent.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], SharedContent.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String }),
    __metadata("design:type", String)
], SharedContent.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => user_entity_1.User, user => user.sharedContent),
    __metadata("design:type", user_entity_1.User)
], SharedContent.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => reaction_content_entity_1.ReactionContent, reactionContent => reactionContent.sharedContent),
    __metadata("design:type", reaction_content_entity_1.ReactionContent)
], SharedContent.prototype, "reactionContent", void 0);
SharedContent = __decorate([
    (0, typeorm_1.Entity)()
], SharedContent);
exports.SharedContent = SharedContent;
;
//# sourceMappingURL=shared-content.entity.js.map