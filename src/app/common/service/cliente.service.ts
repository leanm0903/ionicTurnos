import { Injectable } from '@angular/core';
 import {  HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Icliente } from '../interface/icliente';
@Injectable({providedIn:"root"})
export class ClienteService {
  clienteObtenido:Icliente;
  constructor(private http:HttpClient) { 
     
   }
  getCliente():Observable<Icliente>{
    
    return   this.http.get<Icliente>('https://28a15dca-e1ab-4a7b-9f03-6c36d5aff613.mock.pstmn.io/getCliente');

  }
  
}
