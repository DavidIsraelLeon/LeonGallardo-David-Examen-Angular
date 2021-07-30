import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { ReservaComponent } from '../reserva/reserva.component';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent implements OnInit {

  public listarCliForms: FormGroup;
  public cliente:any;
  public reserva:any;
  public reservacli:any;
  public listarResForms:FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private restService: WsJeeService,
  ) {
    this.listarCliForms=this.formBuilder.group({
      cedula : []
    
   });
   this.listarResForms=this.formBuilder.group({
     nombre : []
   });
  }
   ngOnInit(): void {
  }

  buscarReservaCliente() {
    const cedula = this.listarCliForms.get('cedula')?.value;
    this.restService.buscarRersevaCliente(cedula).subscribe(response => {
      this.reserva = response;
    });
  }

  buscarReservaRestaurante() {
    const nombre = this.listarResForms.get('nombre')?.value;
    this.restService.buscarReservaRestaurante(nombre).subscribe(response => {
      this.reservacli = response;
    });
  }

}
