import { MovieService } from 'src/app/core/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
movieData;
time = '6:00';
  constructor(private route: ActivatedRoute, service: MovieService) { 
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get('title'))[0]
    ;
    console.log(this.movieData);
    })
  }

  ngOnInit() {}
  chooseTime(time) {
    this.time =  time;
    console.log(time);
  }

}
