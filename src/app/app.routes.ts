import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { OverMij } from './pages/over-mij/over-mij';
import { Diensten } from './pages/diensten/diensten';
import { Portfolio } from './pages/portfolio/portfolio';
import { PortfolioProjects } from './pages/portfolio-projects/portfolio-projects';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  // Define your application routes here
  {
    path: '',
    component: Home,
    pathMatch: 'full',
    title: 'Wout - Full Stack Developer',
  },
  {
    path: 'over-mij',
    component: OverMij,
    title: 'Wout - Over mij',
  },
  {
    path: 'diensten',
    component: Diensten,
    title: 'Wout - Diensten',
  },
  {
    path: 'portfolio',
    component: Portfolio,
    title: 'Wout - Portfolio',
    children: [
      {
        path: 'project/:id',
        component: PortfolioProjects,
        title: 'Wout - Portfolio Project',
      },
    ],
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Wout - Contact',
  },
  {
    path: 'not-found',
    component: NotFound,
    title: 'Bug in the matrix? - Pagina niet gevonden',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
