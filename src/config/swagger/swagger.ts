import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export class SwaggerConfig {
  static ConfigSwaggerModule(app: INestApplication): void {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Blog service - API REST')
      .setDescription(
        `
        Blog where the community can share tips and interact with other users.
            ● Users are able to create, edit and delete posts
            ● Users have the option to comment and like posts
            ● Users need to be logged in to the system to perform any action
            (even see the posts)
        `,
      )
      .setVersion('v0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/v1/blog/docs', app, document, {
      swaggerOptions: {
        filter: true,
        showRequestDuration: true,
      },
    });
  };
};