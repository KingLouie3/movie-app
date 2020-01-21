import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { ThankYouComponent } from './layouts/thank-you/thank-you.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovieService } from './core/services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ScheduleComponent,
    ThankYouComponent,
    CheckoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
