import {Injectable} from '@angular/core';
import {DataProviderService} from 'src/app/recipes/data-provider.service';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Recipe} from 'src/app/recipes/recipe.model';

@Injectable({
  providedIn: 'root',
  useClass: DataProviderService,
  deps: [Store],
})
export abstract class RecipesInterface {

  abstract getReceips(): Observable<Recipe[]>;
}
