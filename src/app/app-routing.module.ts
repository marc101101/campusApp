import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found';
import { TimetableComponent } from './timetable/timetable.component';
import { DetailsComponent } from './details/details.component';
import { FavouriteComponent } from './favourite/favourite.component';

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
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'favourites',
    component: FavouriteComponent
  },
  {
      path: '**',
      component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
