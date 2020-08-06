import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private moviesService: MoviesService,
  ) {
    this.loading = true;

    this._route.params.subscribe((params) => {
      this.getMovie(params["id"]);
    });

    console.log(this.movie);
  }

  movie: any;
  loading: boolean;

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
