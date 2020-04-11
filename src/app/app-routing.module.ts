import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'reserva',
    loadChildren: () => import('./turnos/reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'reserva-turno',
    loadChildren: () => import('./turnos/reserva-turno/reserva-turno.module').then( m => m.ReservaTurnoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./seguridad/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'servicio',
    loadChildren: () => import('./servicios/servicio/servicio.module').then( m => m.ServicioPageModule)
  },
 
  {
    path: 'servicio-detalle/:id',
    loadChildren: () => import('./servicios/servicio-detalle/servicio-detalle.module').then( m => m.ServicioDetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
