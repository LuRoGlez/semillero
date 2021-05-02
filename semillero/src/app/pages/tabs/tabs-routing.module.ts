import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'opinions',
        loadChildren: () => import('./../../pages/opinions/opinions.module').then( m => m.OpinionsPageModule)
      },
      {
        path: 'plague',
        loadChildren: () => import('./../../pages/plague/plague.module').then( m => m.PlaguePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./../../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/opinions',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
