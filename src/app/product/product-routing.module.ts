import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';

const routes: Routes = [

  {
    path: '',
    component: BasicsPagesComponent
  }, {
    path: 'numbers',
    component: NumbersPagesComponent
  }, {
    path: 'uncommon',
    component: UncommonPagesComponent
  }, {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
