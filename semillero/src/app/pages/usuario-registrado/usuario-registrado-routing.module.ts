import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRegistradoPage } from './usuario-registrado.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioRegistradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRegistradoPageRoutingModule {}
