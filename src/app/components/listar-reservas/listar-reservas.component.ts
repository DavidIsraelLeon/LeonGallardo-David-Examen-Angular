import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent implements OnInit {

  public listarCliForms: FormGroup;
  public cliente:any;


  constructor(
    private formBuilder: FormBuilder,
    private restService: WsJeeService,
  ) {
    this.listarCliForms=this.formBuilder.group({
      cedula : []
    
   });
  }
   ngOnInit(): void {
  }

  buscarReservaCliente() {
    const cedula = this.listarCliForms.get('cedula')?.value;
    this.restService.buscarRersevaCliente(cedula).subscribe(response => {
      this.cliente = response;
    });
  }

}
