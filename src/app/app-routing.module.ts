import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'the-perks-of-being-a-wallflower',
    loadChildren: () => import('./the-perks-of-being-a-wallflower/the-perks-of-being-a-wallflower.module').then( m => m.ThePerksOfBeingAWallflowerPageModule)
  },  {
    path: 'the-god-father',
    loadChildren: () => import('./the-god-father/the-god-father.module').then( m => m.TheGodFatherPageModule)
  },
  {
    path: 'captain-america',
    loadChildren: () => import('./captain-america/captain-america.module').then( m => m.CaptainAmericaPageModule)
  },
  {
    path: 'me-before-you',
    loadChildren: () => import('./me-before-you/me-before-you.module').then( m => m.MeBeforeYouPageModule)
  },
  {
    path: 'scarface',
    loadChildren: () => import('./scarface/scarface.module').then( m => m.ScarfacePageModule)
  },
  {
    path: 'the-lion-king',
    loadChildren: () => import('./the-lion-king/the-lion-king.module').then( m => m.TheLionKingPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
