import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  populars: any[] = [];
  kids: any[] = [];

  constructor(private moviesService: MoviesService) {
    this.getPopulars();
    this.getKids();
  }

  /* TO GET THE 6 FIRST POPULAR MOVIES */

  getPopulars() {
    return this.moviesService.getPopular().subscribe((resp: any) => {
      for (let x = 0; x < 5; x++) {
        this.populars.push(resp.results[x]);
      }
    });
  }

  /* TO GET THE 6 FIRST KIDS MOVIES */

  getKids() {
    return this.moviesService.getKids().subscribe((resp: any) => {
      for (let x = 0; x < 5; x++) {
        this.kids.push(resp.results[x]);
      }
    });
  }

  ngOnInit() {}
}
