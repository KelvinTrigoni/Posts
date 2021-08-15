import { ConfigHelper } from './config.helper';
import { MongooseModuleOptions } from '@nestjs/mongoose';

ConfigHelper.checkConfig(process.env.MONGODB_URI);

const mongooseOptions: MongooseModuleOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export const MONGO_CONFIG = {
  uri: process.env.MONGODB_URI,
  options: mongooseOptions,
};
