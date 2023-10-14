import { Component, OnDestroy, OnInit, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category, Product, productCategories } from '../core/models/product';
import { Subscription } from 'rxjs';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'meetup-store-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductGridComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  categories: Category[] = productCategories;
  activeCategory = signal('all');
  products: WritableSignal<Product[]> = signal([]);
  productsByCategory = computed(() => {
    return this.activeCategory() !== 'all'
      ? this.products().filter(product => product.category === this.activeCategory())
      : this.products();
  });

  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.activeCategory.set(params['categoryId']);
    });

    this.productsService.getProducts().subscribe(
      products => this.products.set(products)
    );
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
