import {Component, OnInit, Input} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngxs/store';
import {AddShoppingListsAction, ShoppingListAction} from 'src/app/store/shopping-list/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.recipe = this.recipeService.getRecipe(+param['id']);
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(new AddShoppingListsAction(this.recipe.ingredients));
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
