import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found';
import { MenuComponent } from './shared/menu/menu.component';
import { CommunicationService } from './shared/communication.service';
import { AlertService } from './services/alert.service';
import { HomeService } from './services/home.service';
import { TimetableComponent } from './timetable/timetable.component';
import { ChatComponent } from './chat/chat.component';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent,
    MenuComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CommunicationService,
    AlertService,
    HomeService,
    SocketService
    ],
  bootstrap: [AppComponent],
  exports: [MenuComponent]
})
export class AppModule { }
