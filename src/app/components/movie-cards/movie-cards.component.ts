import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {


  @Input() movies:any[];

  constructor() { }

  ngOnInit() {
  }

}
