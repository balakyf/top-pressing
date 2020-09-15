import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepassagePage } from './repassage.page';

const routes: Routes = [
  {
    path: '',
    component: RepassagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepassagePageRoutingModule {}
