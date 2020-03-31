import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { ReservaPage } from "../../turnos/reserva/reserva.page";
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {

  constructor(public popoverController:PopoverController ) { }

  ngOnInit() {
  }
  servicios=[
    {
    "nombre":"Niños",
    "descripcion":"Corte|Refrigerio|Play Station",
    "id":"1",
    "precio":"131",
    "estilo":"linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,1)), url(../../../assets/niñoj.png) no-repeat left"
      
  },
  {
    "nombre":"Clasico",
    "descripcion":"Corte|Lavado|Peinado",
    " id":"2",
    "precio":"123",
    "estilo":"linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.8)), url(../../../assets/corte3.png) no-repeat left"

  },
  {
    "nombre":"Clasico Plus",
    "descripcion":"Lavado|Lavado|Peinado + Perfilado de barba",
    " id":"2",
    "precio":"123",
    "estilo":"linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.2)), url(../../../assets/cortes3.jpg) no-repeat left"
  },
  {
    "nombre":"Barba",
    "descripcion":"Barba y bigote|Perfilado-Rasurado c/ navaja",
    " id":"2",
    "precio":"123",
    "estilo":"linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.2)), url(../../../assets/Barba.jpg) no-repeat bottom"
  },
  {
    "nombre":"Corte niños+padres",
    "descripcion":"Barba y bigote|Perfilado-Rasurado c/ navaja",
    " id":"2",
    "precio":"123",
    "estilo":"url(../../assets/padreehijo.jpg) no-repeat top"
  }]
}
