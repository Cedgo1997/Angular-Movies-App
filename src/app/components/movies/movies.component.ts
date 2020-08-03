import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { Subscribable } from 'rxjs';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  
  popular:any[] = [];

  constructor(private moviesService: MoviesService) {

    this.moviesService.getPopular().subscribe( (resp:any) => {
      this.popular = resp.results;
      console.log(this.popular);
    } )
  }

  ngOnInit() {}
}
