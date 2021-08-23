import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'luca',
    loadChildren: () => import('./filmes/luca/luca.module').then( m => m.LucaPageModule)
  },
  {
    path: 'what-if',
    loadChildren: () => import('./series/what-if/what-if.module').then( m => m.WhatIfPageModule)
  },
  {
    path: 'dados-filmes',
    loadChildren: () => import('./dados-filmes/dados-filmes.module').then( m => m.DadosFilmesPageModule)
  },
  {
    path: 'dados-series',
    loadChildren: () => import('./dados-series/dados-series.module').then( m => m.DadosSeriesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
