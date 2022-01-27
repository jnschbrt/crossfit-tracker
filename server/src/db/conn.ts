import Mongoose from 'mongoose';
import 'dotenv/config';

const uri = process.env.MONGO_URI || '';

let database: Mongoose.Connection;

export const connect = (): void => {
  if (database) {
    return;
  }

  Mongoose.connect(uri);

  database = Mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });
};

export const disconnect = (): void => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};
