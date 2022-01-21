import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { OffersDetailsComponent } from './components/offers-details/offers-details.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';

const routes: Routes = [
  {path: '', redirectTo: 'offers', pathMatch: 'full'},
  {path:'tutorials', component: OffersListComponent},
  {path: 'offers/:id', component: OffersDetailsComponent},
  {path: 'add', component: AddOfferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
