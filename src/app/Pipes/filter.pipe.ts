import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(category_name: any, filterString:string) {
   if(category_name.length === 0 || filterString ===''){
     return category_name
   }

   const offers = [];
   for(const offer of category_name) {
     if(offer['category'] === filterString){
       offers.push(offer)
     }
   }
  }

}
