import { BaseEntity } from 'src/entity/base.entity';
import { Entity, Column, ManyToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'db_roles' })
export class RoleEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  users: UserEntity[];
}
