import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './database/mysql.module';
import { UserModule } from './UserModule/user.module';
import { RoleModule } from './RoleModule/role.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [MysqlModule, UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
