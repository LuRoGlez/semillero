import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionsPageRoutingModule } from './opinions-routing.module';

import { OpinionsPage } from './opinions.page';
import { OpiPage } from '../opi/opi.page';
import { OpiPageModule } from '../opi/opi.module';

@NgModule({
  entryComponents: [OpiPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionsPageRoutingModule,
    OpiPageModule
  ],
  declarations: [OpinionsPage]
})
export class OpinionsPageModule {}
