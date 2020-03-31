import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { ReservaPage } from "../../turnos/reserva/reserva.page";
@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
})
export class ServicioDetallePage implements OnInit {

  constructor(public popoverController:PopoverController ) { }

  ngOnInit() {
  }
  card: Array<number> = [1, 2, 3];
  click(){
    this.presentPopover( );
  }
 async presentPopover() {
  const popover = await this.popoverController.create({
    component:ReservaPage,
    cssClass:'custom-popup',
    translucent: false
  });
  return await popover.present();

}}
