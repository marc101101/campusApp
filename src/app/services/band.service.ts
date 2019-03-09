import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(public alertService: AlertService, public http: HttpClient) {}
    data = [{
        id:0,
        band: "Rammstein",
        time: "Samstag 21.04.2019, 11:15 - 13:30",
        stage: "Center Stage",
        details: "Rammstein (ursprünglich „Rammstein Flugschau“[2]) ist eine deutsche Rockband, die 1994 in Berlin gegründet wurde und musikalisch zur Neuen Deutschen Härte gezählt wird. Ihr Kennzeichen ist ein als „brachial“ beschriebener[3][4] Musikstil, den die Bandmitglieder zu Beginn ihrer Karriere selbst als „Tanzmetall“ bezeichneten.[5] Rammstein ist international berühmt für den intensiven Einsatz von pyrotechnischen Elementen während ihrer Live-Shows.[6]"
      },
      {
        id:1,
        band: "InFlames",
        time: "11:15 - 12:30"
      },
      {
        id:2,
        band: "As I lay dying",
        time: "11:15 - 12:30"
      },
      {
        id:3,
        band: "Heaven Shall Burn",
        time: "11:15 - 12:30"
      },
      {
        id:4,
        band: "Heaven Shall Burn",
        time: "11:15 - 12:30"
      },
      {
        id:5,
        band: "Heaven Shall Burn",
        time: "11:15 - 12:30"
      },
      {
        id:6,
        band: "Heaven Shall Burn",
        time: "11:15 - 12:30"
      },
      {
        id:7,
        band: "Heaven Shall Burn",
        time: "11:15 - 12:30"
      },
      {
        id:8,
        band: "Heaven Shall Burn",
        time: "11:15 - 12:30"
      }];
      
  /**
   * Get all categories from backend.
   */
  getAllBands(): Observable<any> {
    return this.http.get("https://api.campusfest.app/_/items/artist").pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    )
  }

  getBandById(id:number): Observable<any>{
    return this.http.get("https://api.campusfest.app/_/items/artist/" + id).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return of(err);
      })
    )
  }

  getBandImg(id:number): Observable<any>{
    return this.http.get("https://api.campusfest.app/_/files/" + id).pipe(
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
