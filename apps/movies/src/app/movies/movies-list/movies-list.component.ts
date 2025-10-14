import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthFacade, Person } from '@stream-platform/auth-data-access';
import { MovieFacade, MovieFilter, MovieItem } from '@stream-platform/movies-data-access';
import { PageEntity, PageQuery } from '@stream-platform/types';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit, OnDestroy {

  movies$: Observable<PageEntity<MovieItem>>;

  myMovies$: Observable<PageEntity<MovieItem>>;

  person!: Person | null;

  filter: MovieFilter = {}

    private unsubscribe$ = new Subject<void>();


  tabIndex = 0;

  pagequery: PageQuery = {
    page: 0,
    size: 16
  };

  genres = ["Drama", "Comedy", "War", "Romantic Drama"];
  dates = ["1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];

  constructor(private moviesFacade: MovieFacade, private router: Router, private authFacade: AuthFacade) {

    this.moviesFacade.getMyMovies(this.pagequery);

    this.moviesFacade.getMovies(this.pagequery);

    this.myMovies$ = this.moviesFacade.selectMyMovies$;
    this.movies$ = this.moviesFacade.selectMovies$;
  }

  ngOnInit(): void {
    this.authFacade.selectedAuthPerson$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data) => {
      this.person = data;
    });
  }

  onPageChange(event: PageEvent) {
    const query: PageQuery = {
      page: event.pageIndex,
      size: event.pageSize,
    };

    if(this.selectedTabIndex === 0) this.moviesFacade.getMovies(query, this.filter)
      else this.moviesFacade.getMyMovies(query, this.filter);

    this.pagequery = query;
  }

  buyMovieForPerson(movie: MovieItem){
    this.moviesFacade.addCartMovie(movie);
  }

  viewMovie(movieId: number){
    this.router.navigateByUrl(`movies/view-movie/${movieId}`);
  }

  deleteMovie(movieId: number){
    this.moviesFacade.deleteMovie(movieId);
  }

  likeMovie(movieId: number){
    this.moviesFacade.likeMovieForPerson(movieId);
  }

  watchMovie(movieId: number){
    this.router.navigateByUrl(`movies/watch-movie/${movieId}`);
  }

  filterByLike(){
    this.filter = {...this.filter, like: true};
    if(this.selectedTabIndex === 0) this.moviesFacade.getMovies(this.pagequery, this.filter);
    else this.moviesFacade.getMyMovies(this.pagequery, this.filter)
  }

  filterByGenre(genre: string){
    this.filter = {...this.filter, genre};
    if(this.selectedTabIndex === 0) this.moviesFacade.getMovies(this.pagequery, this.filter);
    else this.moviesFacade.getMyMovies(this.pagequery, this.filter)
  }
  filterByDate(date: string){
    this.filter = {...this.filter, decade: date};
    if(this.selectedTabIndex === 0) this.moviesFacade.getMovies(this.pagequery, this.filter);
    else this.moviesFacade.getMyMovies(this.pagequery, this.filter)
  }

  sortByYear(){
    this.filter = {...this.filter, sort: true};
    if(this.selectedTabIndex === 0) this.moviesFacade.getMovies(this.pagequery, this.filter);
    else this.moviesFacade.getMyMovies(this.pagequery, this.filter)
  }

  get isAdmin(): boolean {
    return this.person?.permissions.includes('ADMIN') || false;
  }

  get selectedTabIndex() {
  return this.tabIndex;
}

set selectedTabIndex(value: number) {
  this.tabIndex = value;
  this.resetFilter();
}

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  resetFilter() {
  this.filter = {};
  this.pagequery = { page: 0, size: 16 };
  this.pagequery.page = 0;
  if(this.selectedTabIndex === 0) {
    this.moviesFacade.getMovies(this.pagequery, this.filter);
  } else {
    this.moviesFacade.getMyMovies(this.pagequery, this.filter);
  }
}
}
