import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes para crear las routes
import { LoginComponent } from './usuarios/login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { ResetPasswordComponent } from './usuarios/reset-password/reset-password.component';
import { TempleteComponent } from './main-container/templete/templete.component';

const routes: Routes = [
  // Definimos las rutas de los componentes
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'main', component: TempleteComponent },
  // Si el path es vacio, lo redirigimos al componente login
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
