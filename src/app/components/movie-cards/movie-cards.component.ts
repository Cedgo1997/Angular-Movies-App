import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {


  @Input() movies:any[];

  constructor(private _router: Router) { }


  viewMovie(movie:any) {
    let id:number = movie.id;
    this._router.navigate(['/movie', id]);
  }

  ngOnInit() {
  }

}
