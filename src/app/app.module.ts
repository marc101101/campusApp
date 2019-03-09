import { ChatComponent } from 'src/chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
