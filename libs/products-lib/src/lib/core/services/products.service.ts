import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  // getProduct(slug: string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const product = this.http.get('/assets/data/products.json')
  //       .pipe(
  //         map((data: any) => {
  //           return data.items.find((product: any) => product.slug === slug);
  //         })
  //       );

  //     const product_details = this.http.get('/assets/data/product-extra-details.json');

  //     forkJoin(
  //       product,
  //       product_details
  //     ).subscribe(
  //       data => {
  //         if (data[0] && data[1]) {
  //           resolve(Object.assign({}, data[0], data[1]));
  //         } else {
  //           reject();
  //         }
  //       },
  //       err => {
  //         reject();
  //       },
  //     );
  //   });
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get('/assets/data/products.json').pipe(map((res: any) => res.items)) as Observable<Product[]>;
  }
}
