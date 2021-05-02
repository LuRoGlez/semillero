import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaguePage } from './plague.page';

const routes: Routes = [
  {
    path: '',
    component: PlaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaguePageRoutingModule {}
