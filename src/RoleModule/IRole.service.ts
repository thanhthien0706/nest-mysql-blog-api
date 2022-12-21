import { RoleEntity } from 'src/entity/role.entity';
import { RoleCreateDto } from './dto/role.dto';

export interface IRoleService {
  existRole(nameRole: string): Promise<boolean>;

  createRole(roleDto: RoleCreateDto): Promise<RoleEntity>;
}
