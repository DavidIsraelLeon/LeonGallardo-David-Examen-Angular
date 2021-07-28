import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCliComponent } from './components/registrar-cli/registrar-cli.component';
import { RegistrarRestComponent } from './components/registrar-rest/registrar-rest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular Material */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReservaComponent } from './components/reserva/reserva.component';
/* Angular Flex Layout
import { FlexLayoutModule } from "@angular/flex-layout";*/

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCliComponent,
    RegistrarRestComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
