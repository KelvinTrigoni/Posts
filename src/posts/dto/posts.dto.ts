export class PostsDTO {
  title: string;
  publishedAt: Date;
  description: string;
  slug: string;
  image: string;
  readingTime: number;

  constructor(posts: PostsDTO) {
    Object.assign(this, posts);
  }
}
