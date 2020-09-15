import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepassagePageRoutingModule } from './repassage-routing.module';

import { RepassagePage } from './repassage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepassagePageRoutingModule
  ],
  declarations: [RepassagePage]
})
export class RepassagePageModule {}
