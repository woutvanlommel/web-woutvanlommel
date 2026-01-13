import { Routes } from '@angular/router';

export const routes: Routes = [
  // Define your application routes here
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    pathMatch: 'full',
    title: 'Wout - Full Stack Developer',
  },
  {
    path: 'over-mij',
    loadComponent: () => import('./pages/over-mij/over-mij').then((m) => m.OverMij),
    title: 'Wout - Over mij',
  },
  {
    path: 'diensten',
    loadComponent: () => import('./pages/diensten/diensten').then((m) => m.Diensten),
    title: 'Wout - Diensten',
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
    title: 'Wout - Portfolio',
    children: [
      {
        path: 'project/:id',
        loadComponent: () =>
          import('./pages/portfolio-projects/portfolio-projects').then((m) => m.PortfolioProjects),
        title: 'Wout - Portfolio Project',
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Wout - Contact',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Bug in the matrix?',
  },
];
