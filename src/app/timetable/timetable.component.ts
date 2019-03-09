import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  constructor() { }

  entries = [
    {
      id:0,
      band: "Rammstein",
      time: "11:15 - 12:30"
    }
  ];

  dataIsAvailable = true;

  ngOnInit() {
  }

}
