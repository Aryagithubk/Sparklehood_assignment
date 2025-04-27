import mongoose from 'mongoose';
import { log } from '../utils/logger'; 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    log.info('MongoDB Connected successfully');
  } catch (error) {
    
    log.error(`MongoDB connection failed: ${(error as Error).message}`);
    
    if (process.env.NODE_ENV !== 'production') {
      log.debug(`Stack Trace: ${(error as Error).stack}`);
    }

    process.exit(1);
  }

  mongoose.connection.on('disconnected', () => {
    log.warn('MongoDB connection lost. Attempting to reconnect...');
  });

  mongoose.connection.on('reconnected', () => {
    log.info('MongoDB reconnected successfully');
  });

  mongoose.connection.on('error', (err) => {
    log.error(`MongoDB connection error: ${err.message}`);
  });
};

export default connectDB;