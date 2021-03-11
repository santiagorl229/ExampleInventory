import { ProductModel } from './product.model';
import { PRODUCT_MODEL_PROVIDER,WAREHOUSE_MODEL_PROVIDER ,DB_PROVIDER, SECTION_MODEL_PROVIDER } from '@constants';
import { WarehouseModel } from './warehouse.model';
import { SectionModel } from './section.model';

export const modelProviders = [{
  provide: PRODUCT_MODEL_PROVIDER,
  useValue: ProductModel,
  inject: [DB_PROVIDER]
}];

export const warehouseProviders = [{
  provide: WAREHOUSE_MODEL_PROVIDER,
  useValue: WarehouseModel,
  inject: [DB_PROVIDER]
}];

export const sectionProviders = [{
  provide: SECTION_MODEL_PROVIDER,
  useValue: SectionModel,
  inject: [DB_PROVIDER]
}];