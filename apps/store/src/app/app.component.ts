import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Product } from '@meetup-store/shared';

@Component({
  selector: 'meetup-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    window.addEventListener('addProduct', this.addProduct.bind(this) as EventListener);
    window.addEventListener('removeProduct', this.removeProduct.bind(this) as EventListener);
  }

  getOrdersQuantity() {
    return this.ordersService.getOrdersQuantity();
  }

  private addProduct(event: CustomEvent) {
    this.ordersService.addProduct(event.detail.product as Product);
  }

  private removeProduct(event: CustomEvent) {
    this.ordersService.removeProduct(event.detail.product as Product);
  }
}
