import { Injectable } from '@angular/core';
import { Product } from '@meetup-store/shared';
import { OrdersStateService } from './orders-state.service';

export interface ProductEvent {
  product: Product,
  operation: 'add' | 'remove'
}

@Injectable({
  providedIn: 'root'
})
export class OrdersChannelService {
  private broadcastChannel;

  constructor(private ordersService: OrdersStateService) {
    this.broadcastChannel = new BroadcastChannel('meetup-channel');
    this.broadcastChannel.addEventListener('message', (event) => this.onProductEvent(event.data));
  }

  onProductEvent(event: ProductEvent) {
    if (event.operation === 'add') {
      this.ordersService.addProduct(event.product);
    } else {
      this.ordersService.removeProduct(event.product);
    }
  }

  postProductEvent(event: ProductEvent) {
    this.broadcastChannel.postMessage(event);
    this.onProductEvent(event);
  }
}
