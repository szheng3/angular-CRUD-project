import {Recipe} from 'src/app/recipes/recipe.model';

export class RecipesAction {
  public static readonly type = '[Recipes] Add item';
  constructor(public payload: Recipe) { }
}
