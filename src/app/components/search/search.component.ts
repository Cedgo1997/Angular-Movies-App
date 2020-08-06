import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  movies: any[] = [];
  loading: boolean;
  search:string = '';

  constructor(private moviesService: MoviesService, private _router: ActivatedRoute) {
    this._router.params.subscribe(params => {
      if (params['string']) {
        this.search = params['string'];
        this.getAllMovies();
      }
    })

  }

  getAllMovies() {

    if (this.search.length === 0) {
      return;
    }
    this.loading = true;
    return this.moviesService.getAllMovies(this.search).subscribe((resp: any) => {
      this.movies = resp.results;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
