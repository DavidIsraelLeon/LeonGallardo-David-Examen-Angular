import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cli',
  templateUrl: './registrar-cli.component.html',
  styleUrls: ['./registrar-cli.component.css']
})
export class RegistrarCliComponent implements OnInit {

  public form1 : FormGroup;

  constructor(private RestService : WsJeeService, private formBuilder: FormBuilder,private router: Router) { 
    this.form1= this.formBuilder.group({
      cedula : [],
      nombre: [],
      apellido: [],
      telefono: [],
      direccion: [],
      correo: []
    });
  }

  ngOnInit(): void {
 
  }
  public registrarUsuario(){
    this.RestService.registrar('http://localhost:8080/LeonGallard-David-Examen/rest/crear/registro',
    this.form1.controls['cedula'].value,
    this.form1.controls['nombre'].value, 
    this.form1.controls['apellido'].value,
    this.form1.controls['telefono'].value, 
    this.form1.controls['direccion'].value, 
    this.form1.controls['correo'].value
    )
    .subscribe(respuesta =>{
      console.log('Registro Correcto');
      this.router.navigate(['/']);
    })
  }

}
