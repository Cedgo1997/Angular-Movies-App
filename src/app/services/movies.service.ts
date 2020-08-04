import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private apiKey: string = "527d31593527d0b6d65cca79c0370e36";
  private movieUrl: string = "https://api.themoviedb.org/3";

  private gteDate: any= moment().subtract(2, 'months').format('YYYY-MM-DD');
  private lteDate: any= moment().format('YYYY-MM-DD');


  constructor(private http: HttpClient) {

 }


  getActualMovies() {
    return this.http.get(
      `${this.movieUrl}/discover/movie?primary_release_date.gte=${ this.gteDate }&primary_release_date.lte=${ this.lteDate }&api_key=${this.apiKey}`
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
