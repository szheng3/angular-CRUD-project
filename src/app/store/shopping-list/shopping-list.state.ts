import {State, Action, Selector, StateContext} from '@ngxs/store';
import {AddShoppingListsAction, DeleteShoppingListAction, ShoppingListAction, UpdateShoppingListAction} from './shopping-list.actions';
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
    return [...state.items];
  }

  @Selector()
  public static getShopping(state: ShoppingListStateModel) {
    return (index: number) => {
      return state.items[index];
    };
  }

  @Action(ShoppingListAction)
  public add(ctx: StateContext<ShoppingListStateModel>, {payload}: ShoppingListAction) {
    const stateModel = ctx.getState();
    const ingredients = stateModel.items;
    this.addIngredient(payload, stateModel);
    ctx.setState({...stateModel});
  }

  private addIngredient(payload: Ingredient, stateModel: ShoppingListStateModel) {
    const ingredients = stateModel.items;
    const index = ingredients.findIndex(value => value.name === payload.name);
    if (index === -1) {
      stateModel.items = [...ingredients, payload];
    } else {
      ingredients[index].amount += payload.amount;
    }
  }

  @Action(AddShoppingListsAction)
  public addItems(ctx: StateContext<ShoppingListStateModel>, {payload}: AddShoppingListsAction) {
    const stateModel = ctx.getState();

    payload.forEach(value => {
      this.addIngredient(value, stateModel);
    });
    ctx.setState({...stateModel});
  }

  @Action(UpdateShoppingListAction)
  public update(ctx: StateContext<ShoppingListStateModel>, {payload, index}: UpdateShoppingListAction) {
    const stateModel = ctx.getState();
    stateModel.items[index] = payload;
    ctx.patchState({
      items: [
        ...stateModel.items,
      ],
    });

  }

  @Action(DeleteShoppingListAction)
  public delete(ctx: StateContext<ShoppingListStateModel>, {index}: UpdateShoppingListAction) {
    const stateModel = ctx.getState();
    const value = stateModel.items.filter((ingredient, index1) => {if (index1 !== index) {return ingredient; }});
    ctx.patchState({
      items: [
        ...value,
      ],
    });

  }
}
