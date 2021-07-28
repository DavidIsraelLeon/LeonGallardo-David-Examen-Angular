import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  public clienteForm: FormGroup;
  public restauranteForm: FormGroup;
  public cliente: any;
  public restaurante: any;


  constructor(
    private formBuilder: FormBuilder,
    private restService: WsJeeService,
  ) {
    this.clienteForm = this.formBuilder.group({
      cedula : []
    });
    this.restauranteForm = this.formBuilder.group({
      nombre : []
    });
  }

  ngOnInit(): void {
  }

  buscarCliente() {
    const cedula = this.clienteForm.get('cedula')?.value;
    this.restService.buscarCliente(cedula).subscribe(response => {
      this.cliente = response;
    });
  }

  buscarResturante() {
    const nombre = this.restauranteForm.get('nombre')?.value;
    this.restService.buscarRestaurante(nombre).subscribe(response => {
      this.restaurante = response;
    });
  }

}
