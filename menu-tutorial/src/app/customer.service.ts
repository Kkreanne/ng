import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: any[] = [
    { id: 1, name: "Amazon", state: "WA", majorAcct: true },
    { id: 2, name: "Google", state: "WA", majorAcct: true },
    { id: 3, name: "Microsoft", state: "OH", majorAcct: false }
  ]

  constructor() { }

  list(): Observable<any[]> {   //include httpClient, inject into constructor
    return of(this.customers) as Observable<any[]>;
  }

  get(id: number): Observable<any> {
    return of(this.customers[id-1]) as Observable<any>; //return this.http.nnn.get
  }

  create(cust: any): Observable<any> {    //data will be inside of JSON response, create new class with data, meta, error
    this.customers.push(cust);            // let url = "http://localhost:8080/users" 
    return of(true);                      // `${this.url}/${id}`
  }
}
