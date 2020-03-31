import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaTurnoPage } from './reserva-turno.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaTurnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaTurnoPageRoutingModule {}
