import { ProductModel } from './product.model';
import { PRODUCT_MODEL_PROVIDER,WAREHOUSE_MODEL_PROVIDER ,DB_PROVIDER } from '@constants';
import { WarehouseModel } from './warehouse.model';

export const modelProviders = [{
  provide: [PRODUCT_MODEL_PROVIDER, WAREHOUSE_MODEL_PROVIDER],
  useValue: [ProductModel, WarehouseModel],
  inject: [DB_PROVIDER],
}];
