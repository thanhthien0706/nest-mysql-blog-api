import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger/dist';
import { SWAGGER_CONFIG } from './swagger.config';

export function createDocument(app: INestApplication): OpenAPIObject {
  const builer = new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .setVersion(SWAGGER_CONFIG.version)
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    );

  for (const tag of SWAGGER_CONFIG.tags) {
    builer.addTag(tag);
  }

  const options = builer.build();

  return SwaggerModule.createDocument(app, options);
}
