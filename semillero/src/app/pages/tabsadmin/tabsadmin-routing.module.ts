import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsadminPage } from './tabsadmin.page';

const routes: Routes = [
  {
    path: '',
    component: TabsadminPage,
    children:[
      {
        path: 'activate-user',
        loadChildren: () => import('./../../pages/activate-user/activate-user.module').then( m => m.ActivateUserPageModule)
      },
      {
        path: 'informes',
        loadChildren: () => import('./../../pages/informes/informes.module').then( m => m.InformesPageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./../../pages/productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabsadmin/activate-user',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsadminPageRoutingModule {}
