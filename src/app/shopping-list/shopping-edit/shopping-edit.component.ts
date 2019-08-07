import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, concatMap, defaultIfEmpty, delay, finalize, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {Observable, of, range, Subject} from 'rxjs';
import {Store} from '@ngxs/store';
import {DeleteShoppingListAction, ShoppingListAction, UpdateShoppingListAction} from 'src/app/store/shopping-list/shopping-list.actions';
import {ShoppingListState} from 'src/app/store/shopping-list/shopping-list.state';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('form', {static: false}) form: NgForm;

  ingredient$: Observable<Ingredient>;
  isEdit: boolean;
  index: number;

  constructor(
    private slService: ShoppingListService, private activatedRoute: ActivatedRoute, private store: Store, private router: Router) {

  }

  ngOnInit() {

    this.ingredient$ = this.activatedRoute.params.pipe(
      tap((params) => {
        this.isEdit = params['id'] != null;
        if (this.isEdit) {
          this.index = +params['id'];
        }
      }),
      mergeMap((params) => {
        if (params['id']) {
          return this.store.select(ShoppingListState.getShopping).pipe(map(findOne => findOne(this.index)));
        } else {
          return of({name: '', amount: 0});
        }
      }),
    );
  }

  onAddItem(inputForm: Ingredient) {

    if (!this.isEdit) {
      this.store.dispatch(new ShoppingListAction(inputForm));
      // this.slService.addIngredient(inputForm);

    } else {
      this.store.dispatch(new UpdateShoppingListAction(inputForm, this.index));
    }
  }

  clear(form: NgForm) {
    form.reset();
  }

  delete(form: NgForm) {
    this.store.dispatch(new DeleteShoppingListAction(this.index));
    this.router.navigate(['shoppingList']);
  }

}
