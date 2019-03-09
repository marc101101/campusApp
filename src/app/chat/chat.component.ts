import { Action } from './../model/action';
import { Component, OnInit, AfterViewInit, ViewChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { Event } from './../model/event';
import { Message } from './../model/message';
import { User } from './../model/user';
import { SocketService } from './../services/socket.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, AfterViewInit {
  action = Action;
  user: User;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;
  hide: boolean;


  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.user.name = '';
  }

  /*ngAfterViewInit(): void {
    // subscribing to any changes in the list of items / messages
    //this.matListItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }*/

  ngAfterViewInit(): void {
    console.log('hi');
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });


    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this.socketService.send({
      from: this.user,
      content: message
    });
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = {
        from: this.user,
        action: action
      };
    } else if (action === Action.RENAME) {
      message = {
        action: action,
        content: {
          username: this.user.name,
          previousUsername: params.previousUsername
        }
      };
    }

    this.socketService.send(message);
  }


}
