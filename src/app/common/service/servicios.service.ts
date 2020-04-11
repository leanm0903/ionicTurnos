import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import { ApiConfigurationService } from './api-configuration.service';
import { Servicio } from "../model/servicio";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient,private api:ApiConfigurationService) { }
getServicios():Observable<Servicio[]>{
    const metodo="getServicios";
    return this.http.get<Servicio[]>(this.api.getUrl()+metodo)
}

}
