import {State, Action, Selector, StateContext} from '@ngxs/store';
import {ShoppingListAction, UpdateShoppingListAction} from './shopping-list.actions';
import {Ingredient} from 'src/app/shared/ingredient.model';

export interface ShoppingListStateModel {
  items: Ingredient[];
}

@State<ShoppingListStateModel>({
  name: 'shoppingList',
  defaults: {
    items: [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
      new Ingredient('Tomatoes', 10),
    ],
  },
})
export class ShoppingListState {

  @Selector()
  public static getShoppingList(state: ShoppingListStateModel) {
    return state.items;
  }

  @Action(ShoppingListAction)
  public add(ctx: StateContext<ShoppingListStateModel>, {payload}: ShoppingListAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState({...stateModel});
  }


  @Action(UpdateShoppingListAction)
  public update(ctx: StateContext<ShoppingListStateModel>, {payload}: ShoppingListAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.patchState({
      items: [
        ...ctx.getState().items,
              ]
    });

  }
}
