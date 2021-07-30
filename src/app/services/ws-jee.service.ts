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
    });
  }

  public registrarrest(url:string , nombre:any ,aforo:any,direccion:any ,telefono:any){
    const body = new HttpParams()
    .set('nombre',nombre)
    .set('aforo', aforo)
    .set('direccion', direccion)
    .set('telefono', telefono);
    return this.http.post(url,body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  public reservarRestaurante(url:string , cedula:any,nombre:any ,fechaIngreso:any,numeroPersonas:any){
    const body = new HttpParams()
    .set('cedula',cedula)
    .set('nombre',nombre)
    .set('fechaIngreso',fechaIngreso)
    .set('numeroPersonas', numeroPersonas);
    return this.http.post(url,body.toString(),{
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  public buscarCliente(cedula: string){
    const url = 'http://localhost:8080/LeonGallard-David-Examen/rest/buscar/cliente';
    return this.http.get(url, {
      params: {
        cedula
      },
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'),
    });
  }

  public buscarRestaurante(nombre: string){
    const url = 'http://localhost:8080/LeonGallard-David-Examen/rest/buscar/restaurante';
    return this.http.get(url, {
      params: {
        nombre
      },
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'),
    });
  }

  public buscarRersevaCliente(cedula: string){
    const url = 'http://localhost:8080/LeonGallard-David-Examen/rest/reservas/listarCliente';
    return this.http.get(url, {
      params: {
        cedula
      },
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'),
    });
  }
  public buscarReservaRestaurante(nombre:string){
    const url = 'http://localhost:8080/LeonGallard-David-Examen/rest/reservas/listarRest';
    return this.http.get(url, {
      params: { 
        nombre
      },
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'),
    });
  }





}
