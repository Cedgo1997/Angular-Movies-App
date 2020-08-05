import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "image",
})
export class ImagePipe implements PipeTransform {
  transform(movie: any, poster: boolean = false): any {
    if (!movie) {
      return "assets/no_image.jpg";
    }
    let url = "http://image.tmdb.org/t/p/w500";

    if (poster) {
      return url + movie.poster_path;
    }

    if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else {
      if (movie.poster_path) {
        return url + movie.poster_path;
      } else {
        return "assets/no_image.jpg";
      }
    }
  }
}
