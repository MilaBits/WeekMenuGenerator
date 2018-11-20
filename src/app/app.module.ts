import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MealsComponent } from './components/meals/meals.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './directives/modal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    SidebarComponent,
    RecipeComponent,
    ModalComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
