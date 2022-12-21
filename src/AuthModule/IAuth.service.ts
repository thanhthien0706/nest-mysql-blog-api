import { UserEntity } from 'src/entity/user.entity';
import { SignupDto } from './dto/Auth.dto';

export interface IAuthService {
  signup(
    formSignup: SignupDto,
    avatarFile: Express.Multer.File,
  ): Promise<UserEntity>;
}
