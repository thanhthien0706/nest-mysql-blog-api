import { SignupDto } from 'src/AuthModule/dto/Auth.dto';
import { UserEntity } from 'src/entity/user.entity';

export interface IUserService {
  checkUserExistByEmail(email: string): Promise<boolean>;

  checkUserExistByUserName(userName: string): Promise<boolean>;

  createUser(signupData: SignupDto): Promise<UserEntity>;
}
