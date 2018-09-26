import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Meal } from '../../Meal';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private mealSource = new BehaviorSubject(new Meal());
  meal = this.mealSource.asObservable();

  constructor() { }

  public changeMeal(meal: Meal) {
    this.mealSource.next(meal);
  }
}
