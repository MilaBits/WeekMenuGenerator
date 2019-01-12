import { Component, OnInit } from '@angular/core';
import { Meal } from '../../Meal';
import { User } from '../../User';
import { Recipe } from '../../Recipe';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Ingredient } from '../../Ingredient';
import { ModalComponent } from 'src/app/directives/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user-service.service';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [ModalService]
})
export class RecipeComponent implements OnInit {
  // Diet Preference Modal
  ingredientList: Ingredient[];
  prefUser: User = new User(-1, 'temp', null, [{ id: 0, name: '', amount: 0, unit: '' }]);

  selectedIngredients: Ingredient[];

  // add participant modal
  personList: User[];
  selectedUserType: 'existing';

  selectedUser: User;
  nameFormControl = new FormControl;

  addUser: User;
  userToAdd: User;
  dbUser: User;

  // Meal for the page to show
  meal: Meal;

  // tslint:disable-next-line:max-line-length
  constructor(
    private sharedData: SharedDataService,
    private modalService: ModalService,
    private ingredientService: IngredientService,
    private mealService: MealService,
    private userService: UserService,
    private fb: FormBuilder) { }

  edit(user: User) {
    // Open modal
    this.selectedIngredients = user.foodRestrictions;
    this.modalService.open('pref-modal');

    this.prefUser = user;

    console.log('ingredients');
    console.log(this.ingredientList);
    console.log('pickedIngredients');
    console.log(this.selectedIngredients);

    // Load currently chosen preferences
    // this.selectedPrefs = user.foodRestrictions;

    // console.log(this.selectedPrefs);
  }

  addPersonModal(person: User) {
    this.modalService.open('add-participant-modal');

    this.addUser = person;
  }

  addParticipant(): void {

    if (this.selectedUserType === 'existing') {
      this.userToAdd = this.selectedUser;

      // this.meal.participants.some(element => {
      //   console.log(`${element.id} === ${this.userToAdd.id}`);
      //   if (element.id === this.userToAdd.id) {
      //     console.log(`${element.id} === ${this.userToAdd.id} was true`);
      //     this.modalService.close('add-participant-modal');
      //     this.userToAdd = null;
      //     continue;
      //   }
      // });

      if (this.meal.participants.some(e => e.id === this.userToAdd.id)) {
        this.modalService.close('add-participant-modal');
        return;
      }
      this.meal.participants.push(this.userToAdd);
      this.mealService.updateUsers(this.meal).subscribe();
      return;
    }

    if (this.selectedUserType === 'new') {
      this.userToAdd = new User(null, this.nameFormControl.value, 'test', []);

      this.meal.participants.push(this.userToAdd);
      this.mealService.updateUsers(this.meal).subscribe();
    }

    this.modalService.close('add-participant-modal');
  }

  savePreferences() {
    this.prefUser.foodRestrictions = this.selectedIngredients;

    console.log('prefUserPrefs');
    console.log(this.prefUser.foodRestrictions);

    this.userService.updateFoodPrefs(this.prefUser).subscribe();

    this.modalService.close('pref-modal');
  }

  onAdd($event) {
    console.log($event.name);
  }

  updateUsers(user: User) {
    this.mealService.updateUsers(this.meal).subscribe();
  }

  ngOnInit() {
    // Get meal that is to be shown
    this.sharedData.selectedMeal.subscribe(meal => this.meal = meal);

    // Get all existing ingredients
    this.ingredientService.getIngredients().subscribe(ingredients => this.ingredientList = ingredients);

    this.userService.getUsers().subscribe(users => this.personList = users);

  }
}
