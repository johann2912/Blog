"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const pg_data_module_1 = require("./frameworks/pg/pg-data.module");
const redis_module_1 = require("./frameworks/redis/redis.module");
const user_module_1 = require("./module/user/user.module");
const auth_module_1 = require("./module/auth/auth.module");
const shared_content_module_1 = require("./module/shared-content/shared-content.module");
const reaction_content_module_1 = require("./module/reaction-content/reaction-content.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            pg_data_module_1.PgDatabaseModule,
            redis_module_1.RedisModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            shared_content_module_1.SharedContentModule,
            reaction_content_module_1.ContentReactionModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map