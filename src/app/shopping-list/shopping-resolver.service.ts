import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from 'src/app/shopping-list/shopping-list.service';
import {ShoppingListState} from 'src/app/store/shopping-list/shopping-list.state';
import {Store} from '@ngxs/store';
import {delay, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingResolverService implements Resolve<Ingredient[]> {

  constructor(private shoppingListService: ShoppingListService, private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> | Promise<Ingredient[]> | Ingredient[] {
    return this.store.select(ShoppingListState.getShoppingList).pipe(take(1), delay(1000));
  }

}
