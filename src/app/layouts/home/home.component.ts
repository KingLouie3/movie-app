import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieData;

  constructor(service: MoviesService, private router: Router) {

      this.movieData = service.getAllMovies();
    
   }

  
  ngOnInit() {}
  clickedMovie(slug) {
    this.router.navigate(['movies',slug])
  }

}
