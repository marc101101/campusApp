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
import { MapComponent } from './map/map.component';
import { DetailsComponent } from './details/details.component';
import { BandService } from './services/band.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './sharedModule/alert/alert.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent,
    MenuComponent,
    TimetableComponent,
    DetailsComponent,
    FavouriteComponent,
    LoaderComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxMapboxGLModule.withConfig({
      accessToken:'pk.eyJ1Ijoib3dsd2FsZCIsImEiOiJjajF5eGtncGYwMDBzMzNvY2ZlZHhzdWIyIn0.MzZyfZ3aAcYro6YPyy2CqQ'
    })
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
