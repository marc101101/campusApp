import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataIsAvailable: boolean = false;
  news = [];
  current_acts = [
    {
      name: "Liquid & Maniac",
      place: "NH1",
      time: "11:15 Uhr"
    },
    {
      name: "Blumentopf",
      place: "Center Stage",
      time: "13:15 Uhr"
    },
    {
      name: "Rammstein",
      place: "Center Stage",
      time: "16:15 Uhr"
    },
    {
      name: "Prinz Pi",
      place: "Center Stage",
      time: "22:15 Uhr"
    }
  ]

  constructor(public homeService: HomeService) {  }

  ngOnInit() {
    this.homeService.getNews().subscribe(response => {
      this.news = response;
      this.dataIsAvailable = true;
      console.log(this.news);
      
    })
  }

}
