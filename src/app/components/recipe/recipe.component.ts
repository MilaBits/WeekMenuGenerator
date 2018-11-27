import { Component, OnInit } from '@angular/core';
import { Meal } from '../../Meal';
import { User } from '../../User';
import { Recipe } from '../../Recipe';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Ingredient } from '../../Ingredient';
import { ModalComponent } from 'src/app/directives/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [ModalService]
})
export class RecipeComponent implements OnInit {
  // Diet Preference Modal
  allPrefs$: Observable<Ingredient[]>;
  selectedPrefs: Ingredient[];
  prefUser: User = new User('temp', null, [{ id: 0, name: '', amount: 0, unit: '' }]);

  // Meal for the page to show
  meal: Meal;

  // tslint:disable-next-line:max-line-length
  constructor(private sharedData: SharedDataService, private modalService: ModalService, private ingredientService: IngredientService, private fb: FormBuilder) { }

  edit(user: User) {
    // Open modal
    this.modalService.open('pref-modal');

    // Load currently chosen preferences
    this.selectedPrefs = user.foodRestrictions;

    console.log(this.selectedPrefs);
  }

  onAdd($event) {
    console.log($event.name);
  }

  savePrefs() {
    // rest call to update user's preferences
  }

  ngOnInit() {
    // Get meal that is to be shown
    this.sharedData.selectedMeal.subscribe(meal => this.meal = meal);

    // Get all existing ingredients
    this.allPrefs$ = this.ingredientService.getIngredients();

  }
}
