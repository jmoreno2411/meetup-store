import { Injectable } from '@angular/core';
import { Product } from '@meetup-store/shared';

export interface ProductEvent {
  product: Product,
  operation: 'add' | 'remove'
}

@Injectable({
  providedIn: 'root'
})
export class OrdersChannelService {
  private broadcastChannel;

  constructor() {
    this.broadcastChannel = new BroadcastChannel('meetup-channel');
  }

  postProductEvent(event: ProductEvent) {
    this.broadcastChannel.postMessage(event);
  }
}
