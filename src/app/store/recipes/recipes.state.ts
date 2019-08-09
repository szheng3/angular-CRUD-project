import {State, Action, Selector, StateContext} from '@ngxs/store';
import {RecipesAction, UpdateRecipesAction} from './recipes.actions';
import {Recipe} from 'src/app/recipes/recipe.model';
import {Ingredient} from 'src/app/shared/ingredient.model';

export interface RecipesStateModel {
  items: Recipe[];
}

@State<RecipesStateModel>({
  name: 'recipes',
  defaults: {
    items: [
      new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20),
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1),
        ]),
    ],
  },
})
export class RecipesState {

  @Selector()
  public static getState(state: RecipesStateModel) {
    return state;
  }

  @Selector()
  public static getRecipes(state: RecipesStateModel) {
    return [...state.items];
  }

  @Selector()
  public static getRecipe(state: RecipesStateModel) {
    return (index: number) => {
      return state.items[index];
    };
  }

  @Action(RecipesAction)
  public add(ctx: StateContext<RecipesStateModel>, {payload}: RecipesAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState({...stateModel});
  }

  @Action(UpdateRecipesAction)
  public update(ctx: StateContext<RecipesStateModel>, {payload, index}: UpdateRecipesAction) {
    const stateModel = ctx.getState();
    stateModel.items[index] = payload;
    ctx.setState({...stateModel});
  }
}
