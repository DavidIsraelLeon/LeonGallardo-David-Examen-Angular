import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-rest',
  templateUrl: './registrar-rest.component.html',
  styleUrls: ['./registrar-rest.component.css']
})
export class RegistrarRestComponent implements OnInit {
  public form2 : FormGroup;


  constructor(private RestService : WsJeeService, private formBuilder: FormBuilder,private router: Router) { 
    this.form2= this.formBuilder.group({
      nombre : [],
      aforo: [],
      direccion: [],
      telefono: []
    });
  }

  ngOnInit(): void {
  }

  public registrarRestaurante(){
    this.RestService.registrarrest('http://localhost:8080/LeonGallard-David-Examen/rest/crear/crearrestaurante',
    this.form2.controls['nombre'].value,
    this.form2.controls['aforo'].value, 
    this.form2.controls['direccion'].value,
    this.form2.controls['telefono'].value
    )
    .subscribe(respuesta =>{
      console.log('Registro Correcto');
      this.router.navigate(['/']);
    })
  }

}
