import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './views/products-page/products-page.component';
import { ProductDetailsComponent } from "./views/product-details/product-details.component";
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'products',
    component: ProductsPageComponent,
    data: {
      title: 'Products'
    }
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    data: {
      title: 'Product Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
