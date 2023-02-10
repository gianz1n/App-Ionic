import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Pessoa } from './models/pessoa.model';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listagens-contatos',
    pathMatch: 'full'
  },
  {
    path: 'listagens-contatos',
    loadChildren: () => import('./pages/listagens-contatos/listagens-contatos.module').then( m => m.ListagensContatosPageModule)
  },
  {
    path: 'detalhes-contatos/:id',
    loadChildren: () => import('./pages/detalhes-contatos/detalhes-contatos.module').then( m => m.DetalhesContatosPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
