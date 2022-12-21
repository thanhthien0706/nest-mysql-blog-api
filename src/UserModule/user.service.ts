import { Injectable } from '@nestjs/common/decorators';
import { IUserService } from './IUser.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUser(): string {
    return 'THis is user';
  }
}
