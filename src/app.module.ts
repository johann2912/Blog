import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PgDatabaseModule } from './frameworks/pg/pg-data.module';
import { RedisModule } from './frameworks/redis/redis.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { SharedContentModule } from './module/shared-content/shared-content.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PgDatabaseModule,
    RedisModule,
    UserModule,
    AuthModule,
    SharedContentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
