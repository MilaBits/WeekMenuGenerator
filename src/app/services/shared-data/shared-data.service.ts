import { Injectable, OnInit, AfterViewInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Meal } from '../../Meal';
import { MealService } from '../meal-service.service';
import { User } from '../../User';
import { Recipe } from '../../Recipe';
import { Ingredient } from '../../Ingredient';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements AfterViewInit {

  initialmeal: Meal = {
    date: new Date(),
    participants: Array<User>(),
    recipe: new Recipe('Test', 'Yummy food', new Array<Ingredient>())
  };

  private mealSource = new BehaviorSubject(this.initialmeal);
  selectedMeal = this.mealSource.asObservable();

  constructor(private mealService: MealService) { }

  ngAfterViewInit(): void {
    this.changeMeal(this.initialmeal);
  }

  public changeMeal(meal: Meal) {
    this.mealSource.next(meal);
  }
}
