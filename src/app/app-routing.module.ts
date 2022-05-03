import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './views/products-page/products-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsPageComponent
  },
  // {
  //   path: 'product-detail',
  //   component: ProductsPageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
