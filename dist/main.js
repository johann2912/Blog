"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("./config/swagger/swagger");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const basicAuth = require("express-basic-auth");
const logger_service_1 = require("./config/logger/logger.service");
const filter_1 = require("./config/filter");
const timeout_1 = require("./config/interceptors/timeout");
const response_1 = require("./config/interceptors/response");
const logger_1 = require("./config/interceptors/logger");
async function bootstrap() {
    const configService = new config_1.ConfigService();
    const logger = new logger_service_1.LoggerService();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logger_1.LoggingInterceptor(logger), new response_1.ResponseInterceptor(), new timeout_1.TimeoutInterceptor());
    app.useGlobalFilters(new filter_1.AllExceptionFilter(logger));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    app.setGlobalPrefix('api/v1/blog/docs');
    app.use('api/v1/blog/docs', basicAuth({
        challenge: true,
        users: { developer: configService.get('SWAGGER_PASS') }
    }));
    swagger_1.SwaggerConfig.ConfigSwaggerModule(app);
    await app.listen(3000);
}
;
bootstrap();
//# sourceMappingURL=main.js.map