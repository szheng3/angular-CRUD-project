import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Select} from '@ngxs/store';
import {RecipesState} from 'src/app/store/recipes/recipes.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Select(RecipesState.getRecipes)recipes$: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }
}
