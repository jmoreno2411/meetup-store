import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'meetup-store-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {}
