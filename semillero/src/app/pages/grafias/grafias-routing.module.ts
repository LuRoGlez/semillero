import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrafiasPage } from './grafias.page';

const routes: Routes = [
  {
    path: '',
    component: GrafiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrafiasPageRoutingModule {}
