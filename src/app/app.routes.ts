import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home-page.component'),
  },
  {
    path: 'vehicles-list',
    title: 'Vehiculos',
    loadComponent: () => import('./pages/vehicles/vehicles-page.component'),
  },
];
