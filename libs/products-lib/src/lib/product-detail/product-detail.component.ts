import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/models/product';
import { ProductsService } from '../core/services/products.service';
import { OrdersService } from '../core/services/orders.service';

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
    private ordersService: OrdersService
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
    this.ordersService.addProduct(this.product);
  }
}
