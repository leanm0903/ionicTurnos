import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { ReservaPage } from "../../turnos/reserva/reserva.page";
import { ClienteService } from "../../common/service/cliente.service";
import { HttpClient  } from "@angular/common/http";
import { Icliente } from 'src/app/common/interface/icliente';
import { forkJoin } from 'rxjs';
import { ServiciosService } from 'src/app/common/service/servicios.service';
import { Servicio } from 'src/app/common/model/servicio';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {
  clienteLogueado:Icliente; 
  Servicios:Servicio[];
  constructor(public popoverController:PopoverController,private clienteService:ClienteService,private servicioService:ServiciosService) 
  {
  }


    ngOnInit() {
      this.Login();
      this.getAllServices();
      
      
   }
    Login(){
   this.clienteService.getCliente().subscribe((logueado:Icliente)=> this.clienteLogueado=logueado);
  }
  getAllServices(){
    this.servicioService.getServicios().subscribe((servicio:Servicio[])=>{this.Servicios=servicio;console.log(this.Servicios);
    })
  }

}


