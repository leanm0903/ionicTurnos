import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { ReservaPage } from "../../turnos/reserva/reserva.page";
import { ServiciosService } from 'src/app/common/service/servicios.service';
import { Servicio } from "../../common/model/servicio";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
})
export class ServicioDetallePage implements OnInit {
  ServicioSeleccionado:Servicio=null;
  Servicios:Servicio[];
  bandera:boolean=true;
  id:any;
  constructor(public popoverController:PopoverController,private servicioService:ServiciosService,private activatedRoute:ActivatedRoute) {
 
      
   }

   ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{this.id=params.id})
    this.servicioService.getServicios().subscribe( 
      (servicio) =>{
        while (this.ServicioSeleccionado==undefined||this.ServicioSeleccionado==null) {
          this.ServicioSeleccionado=servicio[this.id];

        }
        this.bandera=false;

    })
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
