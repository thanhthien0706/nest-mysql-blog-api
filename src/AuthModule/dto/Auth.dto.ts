import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsFile } from '../../validator/IsFile.valid';
import { RoleEntity } from 'src/entity/role.entity';

export class SignupDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  userName: string;

  avatar: string | null;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  password: string;

  isActive: boolean | null = true;

  roles: RoleEntity[] | null = [];
}
