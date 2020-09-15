import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavageRepassagePage } from './lavage-repassage.page';

const routes: Routes = [
  {
    path: '',
    component: LavageRepassagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavageRepassagePageRoutingModule {}
