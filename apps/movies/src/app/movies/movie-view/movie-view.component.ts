import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthFacade, Person } from '@stream-platform/auth-data-access';
import { MovieFacade, MovieItem } from '@stream-platform/movies-data-access';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-view',
  standalone: false,
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.css',
})
export class MovieViewComponent implements OnInit, OnDestroy {
  movieId!: number;
  movie!: MovieItem | null;
  person!: Person | null;

  private unsubscribe$ = new Subject<void>();

  movieForm!: FormGroup;

  constructor(
    private movieFacade: MovieFacade,
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private route: ActivatedRoute,
    private router: Router,
    private moviesFacade: MovieFacade
  ) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));

    this.movieFacade.getMovieById(this.movieId);

    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.movieFacade.selectMovie$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((movie) => {
        if (movie) {
          this.movieForm.patchValue({
            title: movie.title,
            year: movie.year,
            genre: movie.genre,
            description: movie.description,
          });
          this.movie = movie;
        }
      });

    this.authFacade.selectedAuthPerson$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.person = data;
      });
  }

  onBack() {
    this.router.navigateByUrl('movies');
  }

  onBuy() {
    this.router.navigateByUrl(`payment/movie-payment/${this.movieId}`);
    // this.moviesFacade.addMovieForPerson(this.movieId);
    // this.router.navigateByUrl('movies');
  }

  onWatch(){
    this.router.navigateByUrl(`movies/watch-movie/${this.movieId}`)
  }

  onCart() {
    if (this.movie) this.movieFacade.addCartMovie(this.movie);
  }

  onDelete(){
    this.movieFacade.deleteMovie(this.movieId);
  }

  onUpdate() {
    if (this.movieForm.valid && this.movie) {
      const formValues = this.movieForm.value;

      const updatedMovie: MovieItem = {
        ...this.movie,
        ...formValues,
      };
      this.movieFacade.updateMovie(updatedMovie);
    }
  }

  get isAdmin(): boolean {
    return this.person?.permissions.includes('ADMIN') || false;
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
