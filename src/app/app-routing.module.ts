import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'timetable',
    component: TimetableComponent
},
  {
      path: '**',
      component: PageNotFoundComponent
  },
  {
    path: 'chat',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
