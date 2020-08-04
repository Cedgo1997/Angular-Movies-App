import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  movies:any[]=[];


  constructor(private moviesService: MoviesService) {
    this.getAllMovies();
  }


  getAllMovies() {
    return this.moviesService.getAllMovies().subscribe( (resp:any) => this.movies = resp.results )
  }

  ngOnInit() {}
}
