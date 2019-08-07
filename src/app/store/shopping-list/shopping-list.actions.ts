import {Ingredient} from 'src/app/shared/ingredient.model';

export class ShoppingListAction {
  public static readonly type = '[ShoppingList] Add item';
  constructor(public payload: Ingredient) { }
}
export class UpdateShoppingListAction {
  public static readonly type = '[ShoppingList] Update item';
  constructor(public payload: Ingredient) { }
}
