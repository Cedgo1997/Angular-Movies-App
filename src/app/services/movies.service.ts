import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private apiKey: string = "527d31593527d0b6d65cca79c0370e36";
  private movieUrl: string = "https://api.themoviedb.org/3";

  private actualDate: any = new Date();

  constructor(private http: HttpClient) {

console.log(this.actualDate);

  }


  getActualMovies() {
    return this.http.get(
      `${this.movieUrl}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.apiKey}`
    );
  }

  getPopular() {
    return this.http.get(
      `${this.movieUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`
    );
  }

  getKids() {
    return this.http.get(
      `${this.movieUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}`
    );
  }
}
