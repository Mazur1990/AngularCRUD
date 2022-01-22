import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {

  offers?:Offer[];
  currentOffer:Offer = {};
  currentIndex = -1;
  category='';

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.retrieveOffers();
  }
  retrieveOffers(): void {
    this.offerService.getAll()
      .subscribe({
        next:(data) =>{
          this.offers=data;
          console.log(data);
        },
        error:(e) => console.error(e)
      })
  }

  refreshList():void {
    this.retrieveOffers();
    this.currentOffer={};
    this.currentIndex = -1;
  }
  setActiveOffer(offer: Offer, index: number):void{
    this.currentOffer = offer;
    this.currentIndex =index
  }

    removeAllOffers():void{
      this.offerService.deleteAll()
        .subscribe({
          next:(res) =>{
            console.log(res);
            this.refreshList();
          },
          error: (e) =>console.error(e)
        })
    }
    searchCategory():void{
      this.currentOffer ={};
      this.currentIndex =-1;
      this.offerService.findByCategory(this.category)
        .subscribe({
          next:(data) =>{
            this.offers = data;
            console.log(data);
          },
          error:(e) => console.error(e)
        })
    }
}
