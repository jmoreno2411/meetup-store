import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  },
  {
    path: ':categoryId',
    loadComponent: () => import('@meetup-store/products-lib').then(m => m.ProductsListComponent)
  },
  {
    path: 'product/:productSlug',
    loadComponent: () => import('@meetup-store/products-lib').then(m => m.ProductDetailComponent)
  }
];
