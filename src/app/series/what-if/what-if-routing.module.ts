import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatIfPage } from './what-if.page';

const routes: Routes = [
  {
    path: '',
    component: WhatIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatIfPageRoutingModule {}
