import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) =>
        users
          .filter((user) => user.id > 4)
          .map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            website: user.website,
          }))
      )
    );
  }

  getUserDetailsById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
      }))
    );
  }
}
