import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { RecipesState, RecipesStateModel } from './recipes.state';
import { RecipesAction } from './recipes.actions';

describe('Recipes store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([RecipesState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: RecipesStateModel = {
      items: ['item-1']
    };
    store.dispatch(new RecipesAction('item-1'));
    const actual = store.selectSnapshot(RecipesState.getState);
    expect(actual).toEqual(expected);
  });

});
