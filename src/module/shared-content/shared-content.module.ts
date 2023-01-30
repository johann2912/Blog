import { Module } from "@nestjs/common";
import { ExceptionsModule } from "src/config/exceptions/exceptions.module";
import { PgDatabaseModule } from "src/frameworks/pg/pg-data.module";
import { SharedContentController } from "./shared-content.controller";
import { SharedContentService } from "./shared-content.service";

@Module({
    imports: [
        PgDatabaseModule,
        ExceptionsModule
    ],
    controllers: [
        SharedContentController
    ],
    providers: [
        SharedContentService
    ],
    exports: [
        SharedContentService
    ],
})
export class SharedContentModule { };