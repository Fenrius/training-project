import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Startpage',
    loadComponent: () => import('./pages/startpage/startpage').then(m => m.Startpage)
  },
  {
    path: 'place/:id',
    title: 'Detailpage',
    loadComponent: () => import('./pages/detailpage/detailpage').then(m => m.Detailpage)
  },
  {
    path: 'add-place',
    title: 'Add Place',
    loadComponent: () => import('./pages/addplaces/addplaces').then(m => m.Addplaces)
  },
];
