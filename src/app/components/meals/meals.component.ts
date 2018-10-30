import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Meal } from '../../Meal';
import { MealService } from '../../services/meal-service.service';
import { MEALS } from '../../mockdata/mock-meals';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[];

  dataMeal: Meal;

  selected: number;

  // TODO: Light up selected day somehow?

  constructor(private sharedData: SharedDataService, private mealService: MealService) { }

  selectMeal(meal: Meal, index: number) {
    this.selected = index;

    this.sharedData.changeMeal(meal);

    console.log(index);
    // console.log(meal.date + '' + this.dataMeal.date);
  }

  ngOnInit() {

    this.mealService.meals.subscribe(meals => this.meals = meals);

    console.log('meals');
    console.log(this.meals);    // empty array
    console.log(this.meals[0]); // undefined
  }
}
