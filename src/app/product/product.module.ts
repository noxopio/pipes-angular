import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toogle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPagesComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,
    //PIPES
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PrimeNgModule
  ]
})
export class ProductModule { }
