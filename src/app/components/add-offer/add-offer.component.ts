import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offer.service';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {

  offer: Offer = {
    title:'',
    description: '',
    category:''
  };
  submitted = false;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
  }
    saveOffer(): void{
      const data = {
        title: this.offer.title,
        description: this.offer.description,
        category: this.offer.category
      };
      this.offerService.create(data)
        .subscribe({
          next:(res) =>{
            console.log(res);
            this.submitted=true;
          },
          error: (e) => console.error(e)
        })
    }
    newOffer():void{
      this.submitted=false;
      this.offer = {
        title:'',
        description:'',
        category:'',
      }
    }
}
