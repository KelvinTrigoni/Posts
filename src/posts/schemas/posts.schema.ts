import { Schema, Document } from 'mongoose';
import * as mongooseLeanId from 'mongoose-lean-id';

export const PostsSchema = new Schema({
  title: { type: Schema.Types.String },
  publishedAt: { type: Schema.Types.Date },
  description: { type: Schema.Types.String },
  slug: { type: Schema.Types.String, require: false },
  image: { type: Schema.Types.String, require: false },
  readingTime: { type: Schema.Types.Number },
});

PostsSchema.plugin(mongooseLeanId);

export interface PostsDocument extends Document {
  id: string;
}
