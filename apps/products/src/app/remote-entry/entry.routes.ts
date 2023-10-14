import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@meetup-store/products-lib').then(m => m.ProductsListComponent)
  },
];
