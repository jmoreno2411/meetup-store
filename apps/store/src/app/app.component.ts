import { Component } from '@angular/core';
import { OrdersStateService } from './services/orders-state.service';
import { Product } from '@meetup-store/shared';
import { OrdersChannelService } from './services/orders-channel.service';

export interface BroadcastChannelProductEvent {
  product: Product,
  operation: 'add' | 'remove'
}

@Component({
  selector: 'meetup-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OrdersChannelService]
})
export class AppComponent {
  constructor(
    private ordersStateService: OrdersStateService,
    private orderChannelService: OrdersChannelService
  ) {}

  getOrdersQuantity() {
    return this.ordersStateService.getOrders().reduce((total, order) => total + order.quantity, 0);
  }
}
