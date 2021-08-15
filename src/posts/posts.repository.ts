import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';
import { PostsDocument } from './schemas/posts.schema';

@Injectable()
export class PostsRepository {
  constructor(@InjectModel('Posts') private readonly modelContatos: Model<PostsDocument>) {}

  async salvar(doc: any, session?: ClientSession): Promise<any> {
    return new this.modelContatos(doc).save({ session });
  }

  async buscarTodosPosts(): Promise<any> {
    const posts = await this.modelContatos.find().exec();

    return posts;
  }
}
