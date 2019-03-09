import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found';
import { ChatComponent } from './chat/chat.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommunicationService } from './shared/communication.service';
import { AlertService } from './services/alert.service';
import { HomeService } from './services/home.service';
import { TimetableComponent } from './timetable/timetable.component';
import { DetailsComponent } from './details/details.component';
import { BandService } from './services/band.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent,
    MenuComponent,
    TimetableComponent,
    DetailsComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CommunicationService,
    AlertService,
    HomeService,
    BandService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent],
  exports: [MenuComponent]
})
export class AppModule { }
