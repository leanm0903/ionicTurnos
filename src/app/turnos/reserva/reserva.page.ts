import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage {
  servicio:string;
  duracion:string;
  dias=[{nombre:"lunes",horario:"13hs"}];
  dia:Dia;

  constructor(public actionSheetController: ActionSheetController) {
    this.dia=new Dia("lunes","13hs");
    this.dia.horario="13hs"
    this.dia.nombre="Lunes"
    this.dias.push({nombre:this.dia.nombre,horario:this.dia.horario})
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Clasico',
        role: 'destructive',
        handler: () => {
          this.duracion="30min"
          this.servicio="Clasico"
          
        }
      }, {
        text: 'Clasico Plus',
        handler: () => {
          this.duracion="50min"
          this.servicio="Clasico Plus"   ;     }
      }, {
        text: 'Barba',
        handler: () => {
          this.duracion="20min"
          this.servicio="barba"   ;   
        }
      }, {
        text: 'Padres e hijos',
        handler: () => {
          this.servicio="Padres e hijos" ;
          this.duracion="70min"  ;
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
  export class Dia {
  nombre:string;
  horario:string;
  /**
   *
   */
  constructor(nombre:string,horario:string) {
    this.horario=horario;
    this.nombre=nombre;
    
  }
  };