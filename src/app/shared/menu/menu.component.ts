import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(public router:Router, public comService: CommunicationService) {}

  /**
   * 
   * @param path path to navigate to
   * Routes to given path.
   * If no path is given only close menu by publishing a message to the communication service.
   */
  routing(path?): void{
    this.comService.sendMessage(false);
    if(path){
      this.router.navigate([path]);    
    }
  
  }

  /**
   * Close menu by publishing a message to the communication service.
   */
  closeMenu():void{
    this.comService.sendMessage(false);
  }

}
