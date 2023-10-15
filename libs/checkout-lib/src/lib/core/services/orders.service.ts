import { Injectable } from '@angular/core';
import { OrdersStateService, Product } from '@meetup-store/shared';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  get orders() {
    return this.ordersState.getOrdersSignal();
  }

  constructor(private ordersState: OrdersStateService) {}

  addProduct(product: Product) {
    this.ordersState.addProduct(product);
  }

  removeProduct(product: Product) {
    this.ordersState.removeProduct(product);
  }

  getOrdersQuantity() {
    return this.orders().reduce((total, order) => total + order.quantity, 0);
  }

  getOrdersTotalPrice() {
    return this.orders().reduce((total, order) => total + (order.quantity * order.product.price), 0);
  }
}
