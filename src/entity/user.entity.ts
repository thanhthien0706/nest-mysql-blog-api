import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/entity/base.entity';
import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { PostEntity } from './post.entity';

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

  @OneToMany(() => PostEntity, (post) => post.author)
  posts: PostEntity[];
}
