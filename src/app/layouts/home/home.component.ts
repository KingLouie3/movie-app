import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieData;
  movies;
  imageUrl = 'https://image.tmdb.org/t/p/original/';
  private mode = 'home'
  constructor(public service: MovieService, private router: Router, private route: ActivatedRoute) {
    
      this.movieData = service.getAllMovies();
    
   }

  
  ngOnInit() {
    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        if(paramMap.has('query')){
          this.service.searchMovies(this.service.query)
          .subscribe(
        (response : any) => {
          this.movies = response.results;
          console.log("movies", this.movies);
        })
        } 
        
        else {
          this.service.getMoviesApi()
          .subscribe(
        (response : any) => {
          this.movies = response.results;
          console.log("movies", this.movies);
  })
        }
      }
    )
  }
    
  clickedMovie(id : any) {
    this.router.navigate(['movies/']);
  }

  
  
}