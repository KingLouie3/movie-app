import { ThankYouComponent } from './layouts/thank-you/thank-you.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { HomeComponent } from './layouts/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:'search/:query',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MovieComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'movies/:title/schedule/checkout/thank-you',
    component: ThankYouComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
