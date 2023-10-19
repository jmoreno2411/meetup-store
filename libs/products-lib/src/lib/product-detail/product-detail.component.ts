import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { Product } from '@meetup-store/shared';
import { OrdersChannelService } from '../core/services/orders-channel.service';

export interface BroadcastChannelProductEvent {
  product: Product,
  operation: 'add' | 'remove'
}

@Component({
  selector: 'meetup-store-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productsService: ProductsService,
    private ordersChannelService: OrdersChannelService
  ) {}

  ngOnInit() {
    const productSlug = this.route.snapshot.paramMap.get('productSlug');

    if (productSlug) {
      this.productsService.getProduct(productSlug).subscribe(
        product => this.product = product
      );
    }
  }

  onBack() {
    this.location.back();
  }

  onAddProduct() {
    this.addProduct(this.product);
  }

  private addProduct(product: Product) {
    this.ordersChannelService.postProductEvent({
      product: product,
      operation: 'add' 
    });
  }
}
