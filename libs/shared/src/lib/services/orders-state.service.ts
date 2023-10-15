import { Injectable, WritableSignal, signal } from '@angular/core';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrdersStateService {
    private orders: WritableSignal<Order[]> = signal([]);

    public getOrdersSignal() {
        return this.orders;
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
        this.orders.update((currentValue) => [...currentValue, order]);
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
        this.orders.set(orders);
    }

    getOrdersQuantity() {
        let ordersQuantity = 0;
        this.getOrders().forEach(order => ordersQuantity += order.quantity);
        return ordersQuantity;
    }

    private getOrderByProduct(product: Product) {
        return this.getOrders().find(o => o.product.slug === product.slug);
    }

    private getOrders() {
        return this.orders();
    }
}
