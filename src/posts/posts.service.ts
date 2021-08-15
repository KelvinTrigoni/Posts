import { Injectable } from '@nestjs/common';

import { PostsRepository } from './posts.repository';
import { PostsDTO } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  async salvarPosts(post: PostsDTO): Promise<PostsDTO> {
    post.publishedAt = new Date();
    const postCriado = await this.repository.salvar(post);

    return postCriado;
  }

  async buscarPosts(): Promise<PostsDTO> {
    const postCriado = await this.repository.buscarTodosPosts();

    return postCriado;
  }
}
