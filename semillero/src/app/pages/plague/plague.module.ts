import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaguePageRoutingModule } from './plague-routing.module';

import { PlaguePage } from './plague.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaguePageRoutingModule,
    PipesModule
  ],
  declarations: [PlaguePage]
})
export class PlaguePageModule {}
