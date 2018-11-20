import { Component, OnInit } from '@angular/core';
import { Meal } from '../../Meal';
import { User } from '../../User';
import { Recipe } from '../../Recipe';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Ingredient } from '../../Ingredient';
import { ModalComponent } from 'src/app/directives/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [ModalService]
})
export class RecipeComponent implements OnInit {
  // Diet Preference Modal
  ShowFilter = false;
  limitSelection = false;
  limits: Array<Ingredient> = [];
  selectedItems: Array<Ingredient> = [];
  dropdownSettings: any = {};
  prefUser: User = new User('temp', null, [{ id: 0, name: '', amount: 0, unit: '' }]);

  // Meal for the page to show
  meal: Meal;

  constructor(private sharedData: SharedDataService, private modalService: ModalService, private ingredientService: IngredientService) { }

  edit(user: User) {
    this.modalService.open('pref-modal');
    this.prefUser = new User(user.name, user.image, user.foodRestrictions);

    // load from user somehow
    this.selectedItems = this.prefUser.foodRestrictions;
  }

  savePrefs() {
    // rest call to update user's preferences
  }

  ngOnInit() {
    this.sharedData.selectedMeal.subscribe(meal => this.meal = meal);

    this.ingredientService.getIngredients().subscribe(limits => this.limits = limits);

    // Diet Form stuff
    this.limits = [ // query to get all ingredients
      { id: 1, name: 'test', amount: 0, unit: '' },
      { id: 2, name: 'Mumbai', amount: 0, unit: '' },
      { id: 3, name: 'Bangalore', amount: 0, unit: '' },
      { id: 4, name: 'Pune', amount: 0, unit: '' },
      { id: 5, name: 'Chennai', amount: 0, unit: '' },
      { id: 6, name: 'Navsari', amount: 0, unit: '' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };
  }
}
