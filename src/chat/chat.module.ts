import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { SharedModule } from 'src/app/sharedModule/shared.module';
import { SocketService } from './shared/services/socket.service';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [SocketService],

})
export class ChatModule { }
