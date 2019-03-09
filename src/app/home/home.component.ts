import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { BandService } from '../services/band.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataIsAvailable: boolean = false;
  news = [];
  current_acts = [];

  constructor(public homeService: HomeService, public bandService: BandService) {  }

  ngOnInit() {
    this.homeService.getNews().subscribe(response => {
      this.news = response.data;
      console.log(this.news);
      
      this.dataIsAvailable = true;      
    });
    this.bandService.getAllBands().subscribe(response => {
      this.current_acts = response.data;
    });
  }

}
