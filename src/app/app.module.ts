import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';



import { PaymentsComponent } from './payments/payments.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { PanierComponent } from './panier/panier.component';
import { SearchFComponent } from './search-f/search-f.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaymentsComponent,
    AddfoodComponent,
    PanierComponent,
    SearchFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
