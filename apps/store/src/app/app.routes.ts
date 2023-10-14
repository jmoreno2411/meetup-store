import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () =>
      import('products/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('@meetup-store/checkout-lib').then((m) => m.CheckoutComponent),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
