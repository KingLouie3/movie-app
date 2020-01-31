import { MovieService } from "src/app/core/services/movies.service";
import { ActivatedRoute,  Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
  movieData;
  selectedMovie;
  adultTickets: any = 1;
  adultTicketsPrice = 15.03;

  childTickets: any = 1;
  childTicketsPrice = 12.06;

  seniorTickets: any = 1;
  seniorTicketsPrice = 11.53;
  totalTickets = this.adultTickets + this.childTickets + this.seniorTickets;
  time = "6:00";
  constructor(private route: ActivatedRoute, private service: MovieService, private  router: Router) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovieData(params.get("title"))[0];
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
    let totalTickets =
      parseFloat(this.adultTickets) +
      parseFloat(this.childTickets) +
      parseFloat(this.seniorTickets);
    this.service.reserveChair(slug, index, totalTickets)
    console.log(totalTickets);
    console.log("clicked chair");
  }
  clickedContinue() {
    this.router.navigate(['checkout'])
  }
}
