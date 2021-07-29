import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  public reserva:any;
  public reservaForm:FormGroup;
  


  constructor(
    private formBuilder: FormBuilder,
    private restService: WsJeeService,
    private router: Router,
    

  ) 
  {
    this.clienteForm = this.formBuilder.group({
      cedula : []
    });
    this.restauranteForm = this.formBuilder.group({
      nombre : []
    });

    this.reservaForm=this.formBuilder.group({
      cedula:[],
      nombre:[],
      numeroPersonas:[],
      fechaIngreso:[]

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

  
  public reservarRestaurante(){
    this.restService.reservarRestaurante('http://localhost:8080/LeonGallard-David-Examen/rest/crear/creareserva',
    this.reservaForm.controls['cedula'].value,
    this.reservaForm.controls['nombre'].value, 
    this.reservaForm.controls['numeroPersonas'].value,
    this.reservaForm.controls['fechaIngreso'].value
    )
    .subscribe(respuesta =>{
      console.log('Registro Correcto');
      this.router.navigate(['/']);
    })
  }

}
