export interface User {
    username: string,
    password?: string,
    firstName: string,
    lastName: string,
    email: string,
    userId?: number,
    likedMovies?: number[],
    permissions: string[],
}

