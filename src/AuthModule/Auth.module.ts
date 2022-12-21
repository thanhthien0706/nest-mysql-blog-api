import { Module } from '@nestjs/common';
import { AuthController } from './Auth.controller';
import { AuthService } from './Auth.service';
import { UserModule } from 'src/UserModule/user.module';
import { RoleModule } from 'src/RoleModule/role.module';

@Module({
  imports: [UserModule, RoleModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
