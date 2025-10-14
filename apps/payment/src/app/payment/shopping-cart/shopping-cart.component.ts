import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieFacade, MovieItem } from '@stream-platform/movies-data-access';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit{



  cartMovies$!: Observable<MovieItem[] | null>;

  constructor( private route: ActivatedRoute, private movieFacade: MovieFacade, private router: Router) {
    this.cartMovies$ = this.movieFacade.selectCartMovies$;
  }

  ngOnInit() {
    console.log('Shopping cart initialized');
  }

  goToMovies(){
    this.router.navigateByUrl('movies/list');
  }

  goToCheckout(){
    this.router.navigateByUrl('payment/movie-payment');
  }


  removeFromCart(movieId: number) {
    this.movieFacade.removeCartMovie(movieId);
  }

  viewMovie(movieId: number) {
    this.router.navigateByUrl(`movies/view-movie/${movieId}`);
  }
}
