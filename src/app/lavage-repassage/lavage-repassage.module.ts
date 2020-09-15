import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavageRepassagePageRoutingModule } from './lavage-repassage-routing.module';

import { LavageRepassagePage } from './lavage-repassage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavageRepassagePageRoutingModule
  ],
  declarations: [LavageRepassagePage]
})
export class LavageRepassagePageModule {}
