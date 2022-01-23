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
    id:'',
    title:'',
    description:'',
    category_name:"",
    
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

    // need to think about this function - data base seems to not have PUT option
  // updateOffer(): void {
  //   this.message = '';
  //   this.offerService.update(this.currentOffer.id, this.currentOffer)
  //   .subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.message = res.message ? res.message : 'This offer was updated successfully!';
  //     },
  //     error: (e) => console.error(e)
  //     });
  // }

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
