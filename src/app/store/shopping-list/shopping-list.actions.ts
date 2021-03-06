import {Ingredient} from 'src/app/shared/ingredient.model';

export class ShoppingListAction {
  public static readonly type = '[ShoppingList] Add item';

  constructor(public payload: Ingredient) { }
}

export class AddShoppingListsAction {
  public static readonly type = '[ShoppingList] Adds item';

  constructor(public payload: Ingredient[]) { }
}

export class UpdateShoppingListAction {
  public static readonly type = '[ShoppingList] Update item';

  constructor(public payload: Ingredient, public index: number) { }
}

export class DeleteShoppingListAction {
  public static readonly type = '[ShoppingList] Delete item';

  constructor( public index: number) { }
}
