import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Product } from '@meetup-store/shared';

export interface BroadcastChannelProductEvent {
  product: Product,
  operation: 'add' | 'remove'
}

@Component({
  selector: 'meetup-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    const channelB = new BroadcastChannel('meetup-channel');
    channelB.addEventListener('message', (event) => this.onBroadcastChannelProductEvent(event.data));
  }

  getOrdersQuantity() {
    return this.ordersService.getOrdersQuantity();
  }

  onBroadcastChannelProductEvent(data: BroadcastChannelProductEvent) {
    if (data.operation === 'add') {
      this.addProduct(data.product);
    } else {
      this.removeProduct(data.product);
    }
  }

  private addProduct(product: Product) {
    this.ordersService.addProduct(product);
  }

  private removeProduct(product: Product) {
    this.ordersService.removeProduct(product);
  }
}
