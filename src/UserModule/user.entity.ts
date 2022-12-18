import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/databaseModule/base.entity';
import { Entity, Column } from 'typeorm';

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
}
