import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes-list/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;

  // tslint:disable-next-line:typedef
  getRecipe(recipeToShow: Recipe) {
    this.recipe = recipeToShow;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
