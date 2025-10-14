import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieFacade, MovieItem } from '@stream-platform/movies-data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-watch',
  standalone: false,
  templateUrl: './movie-watch.component.html',
  styleUrl: './movie-watch.component.css'
})
export class MovieWatchComponent implements OnInit{

  movieId!: number;

  movie$!: Observable<MovieItem | null>

  constructor(private route: ActivatedRoute, private movieFacade: MovieFacade){}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));

    this.movieFacade.getMovieById(this.movieId);

    this.movie$ = this.movieFacade.selectMovie$;
  }


}
