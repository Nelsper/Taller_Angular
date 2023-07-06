import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempleteComponent } from './templete/templete.component';
import { PerfilComponent } from '../usuarios/perfil/perfil.component';
import { AyudaComponent } from '../usuarios/ayuda/ayuda.component';
import { MicuentaComponent } from '../usuarios/micuenta/micuenta.component';

const routes: Routes = [
  {
    path: 'main',
    component: TempleteComponent,
    children: [
      { path: 'perfil', component: PerfilComponent},
      { path: 'ayuda', component:AyudaComponent },
      { path: 'micuenta', component: MicuentaComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule { }
