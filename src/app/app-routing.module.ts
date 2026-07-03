import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./pages/new-user/new-user.module').then( m => m.NewUserPageModule)
  },  {
    path: 'make-reservation',
    loadChildren: () => import('./pages/make-reservation/make-reservation.module').then( m => m.MakeReservationPageModule)
  },
  {
    path: 'select-menu',
    loadChildren: () => import('./pages/select-menu/select-menu.module').then( m => m.SelectMenuPageModule)
  },
  {
    path: 'reservation-list',
    loadChildren: () => import('./pages/reservation-list/reservation-list.module').then( m => m.ReservationListPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
