import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpiPage } from './opi.page';

const routes: Routes = [
  {
    path: '',
    component: OpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpiPageRoutingModule {}
