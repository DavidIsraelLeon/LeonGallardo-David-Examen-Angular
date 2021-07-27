import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCliComponent } from './components/registrar-cli/registrar-cli.component';
import { RegistrarRestComponent } from './components/registrar-rest/registrar-rest.component';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { AngularMaterialModule } from './angular-material.module';*/
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular Flex Layout 
import { FlexLayoutModule } from "@angular/flex-layout";*/

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCliComponent,
    RegistrarRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
