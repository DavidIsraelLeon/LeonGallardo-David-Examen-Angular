import { Component, OnInit } from '@angular/core';
import { WsJeeService } from 'src/app/services/ws-jee.service';
import { FormGroup,FormBuilder, Validators, NgModel } from '@angular/forms';
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
      cedula : ['',Validators.pattern],
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

  public validador:any;

  validadorDeCedula(cedula: String) {
  let cedulaCorrecta = false;
  if (cedula.length == 10)
  {    
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
          // El ultimo digito se lo considera dígito verificador
          let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
          let verificador = parseInt(cedula.substring(9, 10));
          let suma:number = 0;
          let digito:number = 0;
          for (let i = 0; i < (cedula.length - 1); i++) {
              digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
              suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
        //      console.log(suma+" suma"+coefValCedula[i]); 
          }
          suma= Math.round(suma);
        //  console.log(verificador);
        //  console.log(suma);
        //  console.log(digito);
          if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
              cedulaCorrecta = true;
          } else if ((10 - (Math.round(suma % 10))) == verificador) {
              cedulaCorrecta = true;
          } else {
              cedulaCorrecta = false;
          }
      } else {
          cedulaCorrecta = false;
      }
  } else {
      cedulaCorrecta = false;
  }
this.validador= cedulaCorrecta;

}



}
