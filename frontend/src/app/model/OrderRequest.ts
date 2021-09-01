import {Order} from './Order';
import {ProductInOrder} from './ProductInOrder';

export class OrderRequest {

  productsInOrder: Array<ProductInOrder>;
  order: Order;


  constructor(productsInOrder: Array<ProductInOrder>, orderInfo: Order) {
    this.productsInOrder = productsInOrder;
    this.order = orderInfo;
  }
}
