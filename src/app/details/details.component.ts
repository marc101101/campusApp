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
  public bandImage = "";
  public alreadyAdded = false;
  public favourites;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {     
      this.bandService.getBandById(params.id).subscribe(response =>{    
          this.band = response.data;         
          this.dataIsAvailable = true;
          this.alreadyAddedCheck();
          this.bandService.getBandImg(this.band.press).subscribe(response =>{
            this.bandImage = response.data.data.full_url;                                
          });       
      });
    });
  }

  alreadyAddedCheck(){
    this.favourites = JSON.parse(localStorage.getItem('favs'));
      this.favourites.forEach(fav => {
        if(this.band.id == fav.id){
          this.alreadyAdded = true;
        }
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
    this.alreadyAdded = true;
  }

  removeFromFavs(entry){
    this.favourites.forEach((element, i) => {
      if(element.id == entry.id){
        this.favourites.splice(i, 1);        
        localStorage.setItem("favs", JSON.stringify(this.favourites)); 
        this.alreadyAdded = false;  
      }
    });
  }

}
