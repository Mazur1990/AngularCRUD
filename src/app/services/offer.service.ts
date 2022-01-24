import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

const baseUrl = 'https://backend-recruitment-api.herokuapp.com'
const offersUrl ='/offers'

@Injectable({
  providedIn: 'root'
})
export class OfferService {

constructor(private http: HttpClient) { }

getAll():Observable<any> {
  return this.http.get<Offer[]>(baseUrl+offersUrl)
}

get(id: any): Observable<Offer> {
  return this.http.get<Offer>(`${baseUrl+offersUrl}/${id}`)
}

create(data:any): Observable<any>{
  return this.http.post(`${baseUrl+offersUrl}/`,data);
}

update(id:any, data:any): Observable<any> {
  return this.http.put(`${baseUrl+offersUrl}/${id}`, data)
}

delete(id:any): Observable<any> {
  return this.http.delete(`${baseUrl+offersUrl}/${id}`);
}
deleteAll(): Observable<any> {
  return this.http.delete(baseUrl+offersUrl)
}

// More to think about searching details regarding to category search not title
findByCategory(category_name:any): Observable<Offer[]>{
  return this.http.get<Offer[]>(`${baseUrl+offersUrl}?category_name=${category_name}`)
}



// findByTitle(title:any): Observable<Offer[]>{
//   return this.http.get<Offer[]>(`${baseUrl+offersUrl}?title=${title}`)
// }

}
