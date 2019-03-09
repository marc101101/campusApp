import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  dataIsAvailable: boolean = false;
  news = [];

  constructor(public homeService: HomeService) {  }

  ngOnInit() {
    this.homeService.getNews().subscribe(response => {
      this.news = response;
      this.dataIsAvailable = true;
      console.log(this.news);
      
    })
  }

}
