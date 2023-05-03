import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'produto',
    loadComponent: () => import('./produto/produto.page').then( m => m.ProdutoPage)
  },
  {
    path: 'create-cliente',
    loadComponent: () => import('./create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },
  {
    path: 'create-produto',
    loadComponent: () => import('./create-produto/create-produto.page').then( m => m.CreateProdutoPage)
  },

];
