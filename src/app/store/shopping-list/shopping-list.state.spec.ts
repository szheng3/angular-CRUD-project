import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ShoppingListState, ShoppingListStateModel } from './shopping-list.state';
import { ShoppingListAction } from './shopping-list.actions';

describe('ShoppingList store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ShoppingListState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ShoppingListStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ShoppingListAction('item-1'));
    const actual = store.selectSnapshot(ShoppingListState.getState);
    expect(actual).toEqual(expected);
  });

});
