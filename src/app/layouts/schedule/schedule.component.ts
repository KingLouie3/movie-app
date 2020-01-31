import { MovieService } from "src/app/core/services/movies.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
  movieData;
  selectedMovie;
  adultTickets = 1;
  adultTicketsPrice = 15.03;

  childTickets = 1;
  childTicketsPrice = 12.06;

  seniorTickets = 1;
  seniorTicketsPrice = 11.53;

  time = "6:00";
  constructor(private route: ActivatedRoute, private service: MovieService) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get("title"))[1];
      console.log(this.movieData);
    });
  }

  ngOnInit() {
    //testing 
    this.movieData = this.service.movieData[0];
  }
  chooseTime(time) {
    this.time = time;
    console.log(time);
  }
  clickedChair(slug, index) {
    console.log("clicked chair");
  }
}
