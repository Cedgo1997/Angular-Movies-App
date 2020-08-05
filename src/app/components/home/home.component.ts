import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  populars: any[] = [];
  kids: any[] = [];
  latest: any[] = [];
  loading: boolean;

  constructor(private moviesService: MoviesService) {
    this.getPopulars();
    this.getKids();
    this.getActualMovies();
    this.loading = true;
  }

  /* TO GET ACTUAL RELEASES */

  getActualMovies() {
    return this.moviesService.getActualMovies().subscribe((resp: any) => {
      for (let x = 0; x < 15; x++) {
        this.latest.push(resp.results[x]);
        this.loading = false;
      }
      console.log(this.latest[0].backdrop_path);
    });
  }

  /* TO GET THE 6 FIRST POPULAR MOVIES */

  getPopulars() {
    return this.moviesService.getPopular().subscribe((resp: any) => {
      for (let x = 0; x < 5; x++) {
        this.populars.push(resp.results[x]);
        this.loading = false;
      }
    });
  }

  /* TO GET THE 6 FIRST KIDS MOVIES */

  getKids() {
    return this.moviesService.getKids().subscribe((resp: any) => {
      for (let x = 0; x < 5; x++) {
        this.kids.push(resp.results[x]);
        this.loading = false;
      }
    });
  }

  ngOnInit() {}
}
