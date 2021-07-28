import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCliComponent} from './components/registrar-cli/registrar-cli.component';
import { RegistrarRestComponent } from './components/registrar-rest/registrar-rest.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';


const routes: Routes = [
  { path: 'registrar-cli', component: RegistrarCliComponent },
  { path: 'registrar-rest', component: RegistrarRestComponent},
  { path: 'buscar-reserva', component: ReservaComponent},
  {path:'listar-reservas', component: ListarReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

