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
    loadChildren: () =>
      import('@meetup-store/checkout-lib').then((m) => m.CheckoutLibModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
