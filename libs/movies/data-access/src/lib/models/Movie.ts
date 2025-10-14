export interface MovieItem {
  movieId: number,
  title: string,
  description?: string,
  year: number,
  posterUrl?: string,
  videoPreviewUrl?: string,
  genre: string,
  price: number,
}

export interface MovieFilter {
  like?: boolean,
  decade?: string,
  genre?: string,
  sort?: boolean,
}
