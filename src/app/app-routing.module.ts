import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCliComponent} from './components/registrar-cli/registrar-cli.component;


const routes: Routes = [
  { path: 'registrar-cli', component: RegistrarCliComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
