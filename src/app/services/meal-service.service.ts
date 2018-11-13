import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Meal } from '../Meal';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  // public Meals: Meal[];

  private mealsSource = this.getMeals();
  meals = this.mealsSource;

  getMeals(): Observable<Meal[]> {

    console.log('getting meals...');
    const mealsUrl = 'http://localhost:9050/meals';  // URL to web api
    return this.http.get<Meal[]>(mealsUrl)
      .pipe(
        map(result => (JSON.parse(result['message']) as Meal[])),
        catchError(this.handleError('getMeals', []))
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
