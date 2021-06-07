import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrafiasPageRoutingModule } from './grafias-routing.module';

import { GrafiasPage } from './grafias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrafiasPageRoutingModule
  ],
  declarations: [GrafiasPage]
})
export class GrafiasPageModule {}
