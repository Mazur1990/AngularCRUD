import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { OffersDetailsComponent } from './components/offers-details/offers-details.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOfferComponent,
    OffersDetailsComponent,
    OffersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
