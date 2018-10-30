import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Meal } from '../../Meal';
import { MealService } from '../meal-service.service';

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
