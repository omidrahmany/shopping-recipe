import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes-list/Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeForShowingDetails: Recipe;

  constructor() {
  }

  ngOnInit(): void {
  }

}
