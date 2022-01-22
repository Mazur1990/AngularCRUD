import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

const baseUrl = 'https://backend-recruitment-api.herokuapp.com/offers/'


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Offer[]> {
    return this.http.get<Offer[]>(baseUrl)
  }

  get(id: any): Observable<Offer> {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

update(id:any, data:any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, data)
}

delete(id:any): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
}
deleteAll(): Observable<any> {
  return this.http.delete(baseUrl)
}

// More to think about searching details regarding to category search not title
findByCategory(category:any): Observable<Offer[]>{
  return this.http.get<Offer[]>(`${baseUrl}?category=${category}`)
}

// findByTitle(titley:any): Observable<Offer[]>{
//   return this.http.get<Offer[]>(`${baseUrl}?title=${title}`)
// }

}
