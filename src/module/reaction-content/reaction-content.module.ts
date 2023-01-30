import { Module } from "@nestjs/common";
import { ExceptionsModule } from "src/config/exceptions/exceptions.module";
import { PgDatabaseModule } from "src/frameworks/pg/pg-data.module";
import { ContentReactionController } from "./reaction-content.controller";
import { ContentReactionService } from "./reaction-content.service";

@Module({
    imports: [
        PgDatabaseModule,
        ExceptionsModule
    ],
    controllers: [
        ContentReactionController
    ],
    providers: [
        ContentReactionService
    ],
    exports: [
        ContentReactionService
    ],
})
export class ContentReactionModule { };