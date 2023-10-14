import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () => import('@meetup-store/products-lib').then(m => m.ProductsLibModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('@meetup-store/checkout-lib').then(m => m.CheckoutLibModule)
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
