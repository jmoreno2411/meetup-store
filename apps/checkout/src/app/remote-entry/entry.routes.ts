import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@meetup-store/checkout-lib').then((m) => m.CheckoutComponent),
  },
];
