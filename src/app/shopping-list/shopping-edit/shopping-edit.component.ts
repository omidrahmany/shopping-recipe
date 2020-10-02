import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // tslint:disable-next-line:typedef
  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value ,
        this.amountInputRef.nativeElement.value
      ));
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
