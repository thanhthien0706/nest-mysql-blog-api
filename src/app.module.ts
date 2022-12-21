import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './database/mysql.module';
import { UserModule } from './UserModule/user.module';
import { RoleModule } from './RoleModule/role.module';
import { DataSource } from 'typeorm';
import { AuthModule } from './AuthModule/Auth.module';
import { UtilsModule } from './UtilsModule/Utils.module';

@Module({
  imports: [MysqlModule, UserModule, RoleModule, AuthModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
