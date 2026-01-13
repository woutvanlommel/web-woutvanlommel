import { Routes } from '@angular/router';

export const routes: Routes = [
  // Define your application routes here
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    pathMatch: 'full',
  },
  {
    path: 'over-mij',
    loadComponent: () => import('./pages/over-mij/over-mij').then((m) => m.OverMij),
  },
  {
    path: 'diensten',
    loadComponent: () => import('./pages/diensten/diensten').then((m) => m.Diensten),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
    children: [
      {
        path: 'project/:id',
        loadComponent: () =>
          import('./pages/portfolio-projects/portfolio-projects').then((m) => m.PortfolioProjects),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
