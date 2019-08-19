import {RecipesInterface} from 'src/app/recipes/recipes-interface';
import {Store} from '@ngxs/store';
import {RecipesState} from 'src/app/store/recipes/recipes.state';
import {Recipe} from 'src/app/recipes/recipe.model';
import {Observable} from 'rxjs';

export class DataProviderService implements RecipesInterface {

  constructor(private store: Store) {
  }

  getReceips(): Observable<Recipe[]> {
    return this.store.select(RecipesState.getRecipes);
  }
}
