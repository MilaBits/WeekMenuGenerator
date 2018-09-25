import { Component, OnInit } from '@angular/core';
import { MEALS } from '../../mockdata/mock-meals';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals = MEALS;

  constructor() { }

  ngOnInit() {
  }

}
