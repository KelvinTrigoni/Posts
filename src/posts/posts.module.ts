import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PostsService } from './posts.service';
import { PostsSchema } from './schemas/posts.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Posts', schema: PostsSchema }])],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
})
export class PostsModule {}
