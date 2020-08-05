import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  loading: boolean;

  constructor(private moviesService: MoviesService) {
  }

  getAllMovies(text:string) {
    this.loading = true;
    return this.moviesService.getAllMovies(text).subscribe((resp: any) => {
      this.movies = resp.results;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
