import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  public favourites;
  public dataIsAvailable = false;

  ngOnInit() {
    this.favourites = JSON.parse(localStorage.getItem("favs"));
    
    if(this.favourites == null){
      this.favourites = [];
      localStorage.setItem("favs", this.favourites);
    }
    
    this.dataIsAvailable = true;
  }

  removeFromFavs(entry){
    this.favourites.forEach((element, i) => {
      if(element.id == entry.id){
        this.favourites.splice(i, 1);        
        localStorage.setItem("favs", JSON.stringify(this.favourites));      
      }
      
    });
  }
}
