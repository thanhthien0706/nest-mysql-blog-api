import { IsDateString, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class RoleCreateDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string | null;
}
