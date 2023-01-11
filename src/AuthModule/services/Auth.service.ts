import { ConflictException, Injectable } from '@nestjs/common';
import { IAuthService } from '../services/IAuth.service';
import { UserEntity } from 'src/entity/user.entity';
import { SignupDto } from '../dto/Auth.dto';
import { UserService } from 'src/UserModule/services/user.service';
import { CloudinaryService } from 'src/UtilsModule/Cloudinary.service';
import { RoleService } from 'src/RoleModule/services/role.service';

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
    const checkEmail = this.userService.checkUserExistByEmail(formSignup.email);

    const checkUserName = this.userService.checkUserExistByUserName(
      formSignup.userName,
    );

    const findRole = this.roleService.findRoleByName('ROLE_USER');

    const [emailExist, userNameExist, roleData] = await Promise.all([
      checkEmail,
      checkUserName,
      findRole,
    ]);

    if (emailExist) {
      throw new ConflictException(`${formSignup.email} existed`);
    }

    if (userNameExist) {
      throw new ConflictException(`${formSignup.userName} existed`);
    }

    if (roleData) {
      formSignup.roles.push(roleData);
    }

    const avatar = await this.cloudinaryService.uploadFileBuffer(
      avatarFile.buffer,
    );

    if (avatar) {
      formSignup.avatar = avatar.url;
    }

    const user = await this.userService.createUser(formSignup);

    return user;
  }
}
