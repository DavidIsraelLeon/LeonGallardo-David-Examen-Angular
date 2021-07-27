import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarCliComponent} from './components/registrar-cli/registrar-cli.component';
import { RegistrarRestComponent } from './components/registrar-rest/registrar-rest.component';


const routes: Routes = [
  { path: 'registrar-cli', component: RegistrarCliComponent },
  { path: 'registrar-rest', component: RegistrarRestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

