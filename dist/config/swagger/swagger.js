"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
class SwaggerConfig {
    static ConfigSwaggerModule(app) {
        const config = new swagger_1.DocumentBuilder()
            .addBearerAuth()
            .setTitle('Blog service - API REST')
            .setDescription(`
        Blog where the community can share tips and interact with other users.
            ● Users are able to create, edit and delete posts
            ● Users have the option to comment and like posts
            ● Users need to be logged in to the system to perform any action
            (even see the posts)
        `)
            .setVersion('v0.0.1')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/v1/blog/docs', app, document, {
            swaggerOptions: {
                filter: true,
                showRequestDuration: true,
            },
        });
    }
    ;
}
exports.SwaggerConfig = SwaggerConfig;
;
//# sourceMappingURL=swagger.js.map