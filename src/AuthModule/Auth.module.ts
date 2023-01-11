import { Module } from '@nestjs/common';
import { AuthController } from './Auth.controller';
import { AuthService } from './services/Auth.service';
import { UserModule } from 'src/UserModule/user.module';
import { RoleModule } from 'src/RoleModule/role.module';
import { BaseModule } from 'src/BaseModule/Base.module';
import { ResponseHttpService } from 'src/BaseModule/ResponseHttp.service';

@Module({
  imports: [UserModule, RoleModule, BaseModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
