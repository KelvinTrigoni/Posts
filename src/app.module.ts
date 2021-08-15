import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MONGO_CONFIG } from './configs/mongo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot(MONGO_CONFIG.uri, MONGO_CONFIG.options), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
