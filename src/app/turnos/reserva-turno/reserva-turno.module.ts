import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaTurnoPageRoutingModule } from './reserva-turno-routing.module';

import { ReservaTurnoPage } from './reserva-turno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaTurnoPageRoutingModule
  ],
  declarations: [ReservaTurnoPage]
})
export class ReservaTurnoPageModule {}
