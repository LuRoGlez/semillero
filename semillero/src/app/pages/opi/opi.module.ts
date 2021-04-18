import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpiPageRoutingModule } from './opi-routing.module';

import { OpiPage } from './opi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpiPageRoutingModule
  ],
  declarations: [OpiPage]
})
export class OpiPageModule {}
