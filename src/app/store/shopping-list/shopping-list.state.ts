import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ShoppingListAction } from './shopping-list.actions';
import {Ingredient} from 'src/app/shared/ingredient.model';

export interface ShoppingListStateModel {
  items: Ingredient[];
}

@State<ShoppingListStateModel>({
  name: 'shoppingList',
  defaults: {
    items: []
  }
})
export class ShoppingListState {

  @Selector()
  public static getState(state: ShoppingListStateModel) {
    return state;
  }

  @Action(ShoppingListAction)
  public add(ctx: StateContext<ShoppingListStateModel>, { payload }: ShoppingListAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
