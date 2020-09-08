import { Component, OnInit } from '@angular/core';
import {Recipe} from './Recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza' , 'so cool' ,
      'https://th.bing.com/th/id/OIP.gG2GUrHxlhI7YyjB1_ZxKgHaEZ?pid=Api&rs=1'),
    new Recipe('cake' , 'not bad!' ,
      'https://th.bing.com/th/id/OIP.Z_jSc4VXPiMn_rrhN1RQkAHaEK?pid=Api&rs=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
