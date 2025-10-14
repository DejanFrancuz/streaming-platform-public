export interface PageQuery {
  page: number,
  size: number,
  sort?: string,
}

export interface PageEntity<T> {
  content: T[],
  totalPages: number,
  totalElements: number,
  last: boolean
}
