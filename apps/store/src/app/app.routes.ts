import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'checkout',
    loadChildren: () =>
      import('checkout/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('products/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
