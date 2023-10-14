import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'meetup-store-product-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
}
