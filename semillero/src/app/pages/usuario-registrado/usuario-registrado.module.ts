import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRegistradoPageRoutingModule } from './usuario-registrado-routing.module';

import { UsuarioRegistradoPage } from './usuario-registrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRegistradoPageRoutingModule
  ],
  declarations: [UsuarioRegistradoPage]
})
export class UsuarioRegistradoPageModule {}
