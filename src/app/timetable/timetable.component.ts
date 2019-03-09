import { Component, OnInit } from '@angular/core';
import { BandService } from '../services/band.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  constructor(public bandService:BandService) { }

  entries = [
  ];

  dataIsAvailable = false;

  ngOnInit() {
    this.bandService.getAllBands().subscribe( response => {
      this.entries = response;
      this.dataIsAvailable = true;
    });
  }

}
