import { Component, OnInit } from '@angular/core';

import { Meal } from '../../Meal';
import { Recipe } from '../../Recipe';
import { User } from '../../User';
import { PEOPLE } from '../../mockdata/mock-people';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  people = PEOPLE;

  meal: Meal = {
    date: new Date(),
    participants: Array<User>(),
    recipe: new Recipe('Test', 'Yummy food')
  };

  constructor() { }

  ngOnInit() {
  }

}
