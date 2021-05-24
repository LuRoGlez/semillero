import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsadminPage } from './tabsadmin.page';

const routes: Routes = [
  {
    path: '',
    component: TabsadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsadminPageRoutingModule {}
