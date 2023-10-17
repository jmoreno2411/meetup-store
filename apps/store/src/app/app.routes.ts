import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'checkout',
    loadChildren: () => import('checkout/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: 'products',
    loadChildren: () => import('products/Module').then((m) => m.RemoteEntryModule)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomePageComponent)
  },
];
