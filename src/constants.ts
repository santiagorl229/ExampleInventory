import * as dotenv from 'dotenv';
dotenv.config();

export const DB_PROVIDER = 'DbConnectionToken';
export const PRODUCT_MODEL_PROVIDER = 'ProductModelProvider';
export const SERVICE = 'DB_MONGO_SERVICE';
export const APP_NAME = process.env.APP_NAME || 'clean.architecture';
export const DATABASE_SERVICE = process.env.DATABASE_SERVICE || 'DATABASE_SERVICE';
export const APP_PORT = process.env.PORT || 4001;
export const APP_HOST = process.env.APP_HOST || '0.0.0.0';
export const MONGO_HOSTNAME = 'mongodb://localhost:27017/persistence_inventory'


