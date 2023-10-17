import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '@meetup-store/shared';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProduct(slug: string) {
    return this.http.get('/assets/data/products.json')
      .pipe(
        map((data: any) => {
          return data.items.find((product: Product) => product.slug === slug);
        })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/assets/data/products.json').pipe(map((res: any) => res.items)) as Observable<Product[]>;
  }
}
