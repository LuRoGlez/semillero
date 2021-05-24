import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsadminPageRoutingModule } from './tabsadmin-routing.module';

import { TabsadminPage } from './tabsadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsadminPageRoutingModule
  ],
  declarations: [TabsadminPage]
})
export class TabsadminPageModule {}
