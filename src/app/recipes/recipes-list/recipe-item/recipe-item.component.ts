import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Output() recipeItemSelected = new EventEmitter<void>();

  // tslint:disable-next-line:typedef
  onSelectRecipe() {
    this.recipeItemSelected.emit();
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
