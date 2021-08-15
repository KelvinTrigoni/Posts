import { Controller, Post, Get, Body } from '@nestjs/common';

import { PostsDTO } from './dto/posts.dto';
import { PostsService } from './posts.service';

@Controller('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  buscarPosts(): Promise<any> {
    return this.postsService.buscarPosts();
  }

  @Post()
  salvarPosts(@Body() post: PostsDTO): Promise<PostsDTO> {
    return this.postsService.salvarPosts(post);
  }
}
