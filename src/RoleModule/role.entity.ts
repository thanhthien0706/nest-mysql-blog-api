import { IsEmail } from 'class-validator';
import { BaseEntity } from 'src/databaseModule/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'db_roles' })
export class RoleEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
