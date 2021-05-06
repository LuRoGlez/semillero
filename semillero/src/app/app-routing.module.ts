import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'activate-user',
    loadChildren: () => import('./pages/activate-user/activate-user.module').then( m => m.ActivateUserPageModule)
  },
  {
    path: 'usuario-registrado',
    loadChildren: () => import('./pages/usuario-registrado/usuario-registrado.module').then( m => m.UsuarioRegistradoPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'opinions',
    loadChildren: () => import('./pages/opinions/opinions.module').then( m => m.OpinionsPageModule)
  },
  {
    path: 'opi',
    loadChildren: () => import('./pages/opi/opi.module').then( m => m.OpiPageModule)
  },
  {
    path: 'plague',
    loadChildren: () => import('./pages/plague/plague.module').then( m => m.PlaguePageModule)
  },  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'prod',
    loadChildren: () => import('./pages/prod/prod.module').then( m => m.ProdPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
