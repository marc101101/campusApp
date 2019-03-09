import { Component, OnInit } from '@angular/core';
import { BandService } from '../services/band.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public bandService:BandService,  public activatedRoute: ActivatedRoute) { }

  public dataIsAvailable = false;
  public band;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {     
      this.bandService.getBandById(params.id).subscribe(response =>{    
          this.band = response;         
          console.log(this.band);
          this.dataIsAvailable = true;          
      });
    });
      
  }

}
