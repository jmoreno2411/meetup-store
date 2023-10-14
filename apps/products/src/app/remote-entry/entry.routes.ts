import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@meetup-store/products-lib').then(m => m.ProductsLibModule)
  },
];
