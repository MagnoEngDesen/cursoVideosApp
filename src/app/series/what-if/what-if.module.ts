import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatIfPageRoutingModule } from './what-if-routing.module';

import { WhatIfPage } from './what-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatIfPageRoutingModule
  ],
  declarations: [WhatIfPage]
})
export class WhatIfPageModule {}
