import { Component, Input, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer.model';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.scss']
})
export class OffersDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentOffer: Offer = {
    title:'',
    description:'',
    category:'',
  }
  message = ''

  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = '';
      this.getOffer(this.route.snapshot.params['id'])
    }
  }

  getOffer(id:string):void{
    this.offerService.get(id)
      .subscribe({
        next:(data) => {
          this.currentOffer = data;
          console.log(data);
        },
        error: (e) =>console.error(e)
      })
  }
  updatePublished(status:boolean):void {
    const data= {
      title:this.currentOffer.title,
      description: this.currentOffer.description,
      category:'',
      published:status
    }
    this.message = '';

    this.offerService.update(this.currentOffer.id, data)
      .subscribe({
        next:(res) =>{
          console.log(res);
          this.currentOffer.category = status;
          this.message = res.message ? res.message: 'The category was updated succesfully'
        },
        error:(e) => console.error(e)
      })
  }

  updateOffer(): void {
    this.message = '';

    this.offerService.update(this.currentOffer.id, this.currentOffer)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteOffer():void{
    this.offerService.delete(this.currentOffer.id)
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigate(['/offers']);
        },
        error:(e) => console.error(e)
      })
  }
}
