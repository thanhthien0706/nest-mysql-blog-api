import { IsDate } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  @IsDate()
  created_at: Date;

  @UpdateDateColumn()
  @IsDate()
  updated_at: Date;

  @DeleteDateColumn()
  @IsDate()
  deleted_at: Date;
}
