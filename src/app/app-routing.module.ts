import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'repassage',
    loadChildren: () => import('./repassage/repassage.module').then( m => m.RepassagePageModule)
  },
  {
    path: 'lavage',
    loadChildren: () => import('./lavage/lavage.module').then( m => m.LavagePageModule)
  },
  {
    path: 'lavage-repassage',
    loadChildren: () => import('./lavage-repassage/lavage-repassage.module').then( m => m.LavageRepassagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
