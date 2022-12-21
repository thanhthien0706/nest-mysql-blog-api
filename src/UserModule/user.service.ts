import { Injectable } from '@nestjs/common/decorators';
import { IUserService } from './IUser.service';
import { UserRepository } from './user.repository';
import { SignupDto } from 'src/AuthModule/dto/Auth.dto';
import { UserEntity } from 'src/entity/user.entity';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async checkUserExistByEmail(email: string): Promise<boolean> {
    const checkUser = await this.userRepository.exist({
      where: { email },
    });

    return checkUser;
  }
  async checkUserExistByUserName(userName: string): Promise<boolean> {
    const checkUser = await this.userRepository.exist({
      where: { userName },
    });

    return checkUser;
  }

  async createUser(signupData: SignupDto): Promise<UserEntity> {
    const user = await this.userRepository.save(signupData);

    if (!user) {
      throw new ConflictException(`Not Create User`);
    }

    return user;
  }

  getUser(): string {
    return 'THis is user';
  }
}
