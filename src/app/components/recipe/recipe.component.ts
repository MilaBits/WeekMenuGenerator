import { Component, OnInit } from '@angular/core';
import { Meal } from '../../Meal';
import { User } from '../../User';
import { Recipe } from '../../Recipe';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Ingredient } from '../../Ingredient';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  meal: Meal;

  // meal: Meal;

  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    this.sharedData.selectedMeal.subscribe(meal => this.meal = meal);
  }
}
