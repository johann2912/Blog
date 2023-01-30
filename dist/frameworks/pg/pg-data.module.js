"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgDatabaseModule = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const database_abstract_1 = require("./core/abstract/database.abstract");
const entities = require("./entities");
const pg_data_service_1 = require("./pg-data.service");
let PgDatabaseModule = class PgDatabaseModule {
};
PgDatabaseModule = __decorate([
    (0, decorators_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule.forRoot({})],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return {
                        type: 'postgres',
                        host: configService.get('PGHOST'),
                        port: configService.get('PGPORT'),
                        username: configService.get('PGUSER'),
                        password: configService.get('PGPASSWORD'),
                        database: configService.get('PGDATABASE'),
                        logging: false,
                        entities: Object.values(entities),
                        synchronize: true,
                    };
                },
            }),
            typeorm_1.TypeOrmModule.forFeature(Object.values(entities)),
        ],
        providers: [
            {
                provide: database_abstract_1.IDatabaseAbstract,
                useClass: pg_data_service_1.PgDatabaseService,
            },
        ],
        exports: [database_abstract_1.IDatabaseAbstract],
    })
], PgDatabaseModule);
exports.PgDatabaseModule = PgDatabaseModule;
//# sourceMappingURL=pg-data.module.js.map