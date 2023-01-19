import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entity/categories.entity';
import { PostEntity } from 'src/entity/post.entity';
import { RoleEntity } from 'src/entity/role.entity';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'db-nest-blog',
      entities: [UserEntity, RoleEntity, CategoryEntity, PostEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class MysqlModule {}
