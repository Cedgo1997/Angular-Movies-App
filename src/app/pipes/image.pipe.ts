import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(movie: any): any {
    if ( movie.poster_path ) {
      return movie.poster_path
    } else if (movie.backdrop_path) {
      return movie.backdrop_path
    } else {
      return "assets/no_image.jpg"
    }
  }

}
