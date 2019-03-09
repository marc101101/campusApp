import { Component, OnInit } from '@angular/core';
import { BandService } from '../services/band.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  constructor(public bandService:BandService) { }

  entries = [];
  favourites;
  dataIsAvailable = false;

  ngOnInit() {
    this.bandService.getAllBands().subscribe( response => {
      this.entries = response.data;
      this.dataIsAvailable = true;
      
      this.favourites = JSON.parse(localStorage.getItem("favs"));
    
      if(this.favourites == null){
        this.favourites = [];
        localStorage.setItem("favs", this.favourites);
      }
      this.alreadyAddedCheck();
    });

  }

  alreadyAddedCheck(){
    this.entries.forEach(entry => {
      entry.alreadyAdded = false;
      this.favourites.forEach(fav => {
        if(entry.id == fav.id){
          entry.alreadyAdded = true;
        }
      });
    });
  }

  addToFavs(entry){
    var favs = [];
    // Parse the serialized data back into an aray of objects
    try {
      favs = JSON.parse(localStorage.getItem('favs'));
    } catch (error) {
      favs = null;
    }

    if(favs == null) {
      favs = [];
    }
    // Push the new data (whether it be an object or anything else) onto the array
    favs.push(entry);
    this.favourites = favs;
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('favs', JSON.stringify(favs));
    this.alreadyAddedCheck();
  }

  removeFromFavs(entry){
    this.favourites.forEach((element, i) => {
      if(element.id == entry.id){
        this.favourites.splice(i, 1);        
        localStorage.setItem("favs", JSON.stringify(this.favourites));   
        this.alreadyAddedCheck(); 
      }
    });
  }

}
