import { Injectable } from '@angular/core';
import { Order, Product } from '@meetup-store/shared';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];

  getOrders() {
    return this.orders;
  }

  updateOrders(orders: Order[]) {
    this.orders = orders;
  }

  addProduct(product: Product) {
    const order = this.getOrderByProduct(product);
    if (order) {
        this.updateOrder({...order, quantity: order.quantity + 1});
    } else {
        this.addOrder({ product, quantity: 1 });
    }
  }

  private addOrder(order: Order) {
    this.orders = [...this.orders, order];
  }

  private updateOrder(order: Order) {
    const ordersUpdated = this.getOrders().map(o => {
        if (o.product.slug === order.product.slug) {
            return order;
        }
        return o;
    });
    this.setOrdersState(ordersUpdated);
  }

  private setOrdersState(orders: Order[]) {
    this.orders = orders;
  }

  private getOrderByProduct(product: Product) {
    return this.getOrders().find(o => o.product.slug === product.slug);
  }
}
