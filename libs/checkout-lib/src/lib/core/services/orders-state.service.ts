import { Injectable } from '@angular/core';
import { Order, Product } from '@meetup-store/shared';

@Injectable({
  providedIn: 'root'
})
export class OrdersStateService {
  private orders: Order[] = [];

  getOrders() {
    return this.orders;
  }

  updateOrders(orders: Order[]) {
    this.orders = orders;
  }

  getOrdersTotalPrice() {
    return this.orders.reduce((total, order) => total + (order.quantity * order.product.price), 0);
  }

  addProduct(product: Product) {
    const order = this.getOrderByProduct(product);
    if (order) {
        this.updateOrder({...order, quantity: order.quantity + 1});
    } else {
        this.addOrder({ product, quantity: 1 });
    }
  }

  removeProduct(product: Product) {
    const order = this.getOrderByProduct(product);
    if (order) {
        order?.quantity > 1
          ? this.updateOrder({...order, quantity: order.quantity - 1})
          : this.removeOrder(order);
    }
  }

  private addOrder(order: Order) {
    this.orders = [...this.orders, order];
  }

  private removeOrder(order: Order) {
    const ordersUpdated = this.getOrders().filter(o => o.product.slug !== order.product.slug);
    this.setOrdersState(ordersUpdated);
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
