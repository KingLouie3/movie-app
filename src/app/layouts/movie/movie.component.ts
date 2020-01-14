import { MoviesService } from 'src/app/core/services/movies.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieData;
  constructor(service: MoviesService) { 
    this.movieData = service.getMovieData
    ('star-wars-the-rise-of-skywalker')[0];
    console.log(this.movieData);
  }

  ngOnInit() {
  }

}
