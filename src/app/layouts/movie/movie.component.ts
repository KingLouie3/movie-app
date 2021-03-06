import { MovieService } from 'src/app/core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieData;
  selectedMovie;
  constructor(public service: MovieService, private route: ActivatedRoute, private router: Router) { 
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get('title'))[0]
    ;
    console.log(this.movieData);
    })
  }

  ngOnInit() {
    this.selectedMovie  = this.service.selectedMovie;
    window.scrollTo(0, 0);

  }
  clickedTicketsBtn() {
    console.log("Button clicked")
    this.router.navigate(['schedule'])
  }

}
