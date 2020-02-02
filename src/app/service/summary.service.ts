import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Summary } from '../model/summary.class';

const url = 'http://localhost:8080/summarys/';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(summary: Summary): Observable<JsonResponse> {
    return this.http.post(url, summary) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(summary: Summary): Observable<JsonResponse> {
    return this.http.put(url, summary) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }
}
