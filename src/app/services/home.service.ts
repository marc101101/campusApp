import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public alertService: AlertService, public http:HttpClient) {}

  /**
   * Get all categories from backend. 
   */
  getNews(): Observable<any> {
    return this.http.get("https://api.campusfest.app/_/items/news?sort=sort").pipe(
        map((res: Response) => {
          return res;
        }),
        catchError((err: HttpErrorResponse) => {
          this.alertService.push(err);
          return of(err);
        })
      )
  }
  
}
