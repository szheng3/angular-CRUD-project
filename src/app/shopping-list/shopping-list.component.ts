import {Component, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.activatedRoute.data.subscribe(value => {
        this.ingredients = value['ingredient'];
      },
    );
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      },
    );
  }

}
