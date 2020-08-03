import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  private apiKey:string = '527d31593527d0b6d65cca79c0370e36';
  private movieUrl:string = 'https://api.themoviedb.org/3'

  constructor( private http: HttpClient ) { }
}
