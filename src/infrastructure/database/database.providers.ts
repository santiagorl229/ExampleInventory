import * as mongoose from 'mongoose';
import { DB_PROVIDER, MONGO_HOSTNAME } from '@constants';
require('dotenv').config()

export const databaseProviders = [{
    provide: DB_PROVIDER,
    useFactory: async (): Promise<typeof mongoose> =>
      mongoose.connect(MONGO_HOSTNAME, { useNewUrlParser: true, useFindAndModify: false }),
}];


mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");
});



