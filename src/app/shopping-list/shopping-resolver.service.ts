import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from 'src/app/shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingResolverService implements Resolve<Ingredient[]> {

  constructor(private shoppingListService: ShoppingListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> | Promise<Ingredient[]> | Ingredient[] {
    return this.shoppingListService.getIngredients();
  }

}
