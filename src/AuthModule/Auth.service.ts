import { ConflictException, Injectable } from '@nestjs/common';
import { IAuthService } from './IAuth.service';
import { UserEntity } from 'src/entity/user.entity';
import { SignupDto } from './dto/Auth.dto';
import { UserService } from 'src/UserModule/user.service';
import { CloudinaryService } from 'src/UtilsModule/Cloudinary.service';
import { RoleService } from 'src/RoleModule/role.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly roleService: RoleService,
  ) {}

  async signup(
    formSignup: SignupDto,
    avatarFile: Express.Multer.File,
  ): Promise<UserEntity> {
    const checkEmail = await this.userService.checkUserExistByEmail(
      formSignup.email,
    );

    if (checkEmail) {
      throw new ConflictException(`${formSignup.email} existed`);
    }

    const checkUserName = await this.userService.checkUserExistByUserName(
      formSignup.userName,
    );

    if (checkUserName) {
      throw new ConflictException(`${formSignup.userName} existed`);
    }

    const avatar = await this.cloudinaryService.uploadFileBuffer(
      avatarFile.buffer,
    );

    if (avatar) {
      formSignup.avatar = avatar.url;
    }

    const role = await this.roleService.findRoleByName('ROLE_USER');

    if (role) {
      formSignup.roles.push(role);
    }

    const user = await this.userService.createUser(formSignup);

    return user;
  }
}
