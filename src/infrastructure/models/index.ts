import { ProductModel } from './product.model';
import { PRODUCT_MODEL_PROVIDER, DB_PROVIDER } from '@constants';

export const modelProviders = [{
  provide: PRODUCT_MODEL_PROVIDER,
  useValue: ProductModel,
  inject: [DB_PROVIDER],
}];
