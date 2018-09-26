import { Component, OnInit } from '@angular/core';

import { MEALS } from '../../mockdata/mock-meals';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Meal } from '../../Meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals = MEALS;

  dataMeal: Meal;

  selected: number;

  // TODO: Light up selected day somehow?

  constructor(private sharedData: SharedDataService) { }

  selectMeal(meal: Meal, index: number) {
    this.selected = index;

    this.sharedData.changeMeal(meal);

    console.log(index);
    // console.log(meal.date + '' + this.dataMeal.date);
  }

  ngOnInit() {
    this.sharedData.meal.subscribe(meal => this.dataMeal = meal);
  }

}
