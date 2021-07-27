import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  constructor(private http: HttpClient) { }

  public registrar(url:string , cedula:any ,nombre:any ,apellido:any,telefono:any,correo:any
    ,direccion:any){
    const body = new HttpParams()
    .set('cedula', cedula)
    .set('nombre', nombre)
    .set('apellido', apellido)
    .set('telefono', telefono)
    .set('correo', correo)
    .set('direccion', direccion);

    return this.http.post(url,body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
    );
      }}