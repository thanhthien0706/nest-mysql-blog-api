import { ConflictException, Injectable } from '@nestjs/common';
import { IRoleService } from './IRole.service';
import { RoleEntity } from 'src/entity/role.entity';
import { RoleRepository } from '../role.repository';
import { RoleCreateDto } from '../dto/role.dto';

@Injectable()
export class RoleService implements IRoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async existRole(nameRole: string): Promise<boolean> {
    const checkRole = await this.roleRepository.exist({
      where: { name: nameRole },
    });

    return checkRole;
  }

  async createRole(roleDto: RoleCreateDto): Promise<RoleEntity> {
    const checkRole = await this.existRole(roleDto.name);
    if (checkRole) {
      throw new ConflictException(`${roleDto.name} existed`);
    }

    const role = await this.roleRepository.save(roleDto);

    if (!role) {
      throw new ConflictException(`Not Create Role: ${roleDto.name}`);
    }

    return role;
  }

  async findRoleByName(nameRole: string): Promise<RoleEntity> {
    const role = await this.roleRepository.findOneBy({ name: nameRole });

    if (!role) {
      throw new ConflictException(`Role ${nameRole} not existed`);
    }

    return role;
  }
}
