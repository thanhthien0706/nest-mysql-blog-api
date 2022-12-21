import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/entity/base.entity';
import { Entity, Column, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity({ name: 'db_users' })
export class UserEntity extends BaseEntity {
  @Column()
  fullName: string;

  @Column()
  userName: string;

  @Column()
  avatar: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  @ManyToMany(() => RoleEntity, (role) => role.users)
  @JoinTable({
    name: 'db_user_role',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RoleEntity[];
}
