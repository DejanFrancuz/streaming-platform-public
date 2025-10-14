import { Person } from "./Person";

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
    jwt: string;
    personData: Person,
}
