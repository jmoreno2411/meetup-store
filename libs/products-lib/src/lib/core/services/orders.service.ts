import { Injectable } from '@angular/core';
import { Order, OrdersStateService, Product } from '@meetup-store/shared';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders$: Observable<Order[]>;
  
  constructor(private ordersState: OrdersStateService) {
    this.orders$ = toObservable(this.ordersState.getOrdersSignal());
  }

  addProduct(product: Product) {
    this.ordersState.addProduct(product);
  }

  getOrders() {
    return this.orders$;
  }
}
