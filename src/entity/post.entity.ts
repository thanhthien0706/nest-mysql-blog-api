import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { text } from 'stream/consumers';
import { StatusPost } from './enum/StatusPost.enum';
import { UserEntity } from './user.entity';
import { CategoryEntity } from './categories.entity';

@Entity({ name: 'db_posts' })
export class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: 'text' })
  avatar: string;

  @Column()
  slug: string;

  @Column({ type: 'text' })
  subContent: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  status: StatusPost;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  author: UserEntity;

  @ManyToMany(() => CategoryEntity, (category) => category.posts)
  @JoinTable({
    name: 'db_post_category',
    joinColumn: { name: 'post_id' },
    inverseJoinColumn: { name: 'category_id' },
  })
  categories: CategoryEntity[];
}
