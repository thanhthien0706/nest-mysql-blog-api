import { Controller, Get } from '@nestjs/common/decorators';
import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getUser();
  }
}
