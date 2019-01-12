import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../User';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    console.log('getting users...');
    const mealsUrl = 'http://localhost:9050/users';  // URL to web api
    return this.http.get<User[]>(mealsUrl)
      .pipe(
        map(result => (JSON.parse(result['message']) as User[])),
        catchError(this.handleError('getUsers', []))
      );
  }

  addUser(user: User): Observable<any | User> {
    console.log('adding user...');
    const mealsUrl = 'http://localhost:9050/user/add';  // URL to web api
    return this.http.post<User>(mealsUrl, user)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  updateFoodPrefs(user: User): Observable<any | User> {

    console.log(`Updating ${user.name}\'s food preferences`);
    const UsersUrl = `http://localhost:9050/users/${user.id}/updateFoodPrefs`;  // URL to web api
    return this.http.put<User>(UsersUrl, user)
      .pipe(
        catchError(this.handleError('putUsers', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error('failed httprequest');
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
