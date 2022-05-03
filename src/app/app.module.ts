import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './custom-pipes/summary.pipe';
import { AllCarsService } from './all-services/all-cars/all-cars.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { SingleButtonComponent } from './components/sub-components/single-button/single-button.component';
import { ProductsPageComponent } from './views/products-page/products-page.component';
import { ViewModeButtonComponent } from './components/sub-components/view-mode-button/view-mode-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HeroComponent,
    SingleButtonComponent,
    ProductsPageComponent,
    ViewModeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AllCarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
