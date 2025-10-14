import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieItem } from '@stream-platform/movies-data-access';


@Component({
  selector: 'app-movies-item',
  standalone: false,
  templateUrl: './movies-item.component.html',
  styleUrl: './movies-item.component.css'
})
export class MoviesItemComponent {

  @Input()
  movieItem!: MovieItem;

  @Input()
  isAdmin = false;

  @Input()
  isLiked = false;

  @Input()
  isMyPage = false;

  @Output()
  buyMovie = new EventEmitter<MovieItem>();

  @Output()
  viewMovie = new EventEmitter<number>();

  @Output()
  deleteMovie = new EventEmitter<number>();

  @Output()
  watchMovie = new EventEmitter<number>();

  @Output()
  likeMovie = new EventEmitter<number>();

  onBuyMovie(){
    this.buyMovie.emit(this.movieItem);
  }

  onViewMovie(){
    this.viewMovie.emit(this.movieItem.movieId);
  }

  onDeleteMovie(){
    this.deleteMovie.emit(this.movieItem.movieId);
  }

  onWatchMovie(){
    this.watchMovie.emit(this.movieItem.movieId);
  }

  isTextOverflowing(element: HTMLElement): boolean {
  return element.offsetWidth < element.scrollWidth;
}

onLikeMovie() {
  this.isLiked = !this.isLiked;
  this.likeMovie.emit(this.movieItem.movieId);
}
}
