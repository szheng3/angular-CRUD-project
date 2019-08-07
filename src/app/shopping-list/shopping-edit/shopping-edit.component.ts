import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {defaultIfEmpty, delay, map, tap} from 'rxjs/operators';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {Observable, of, range, Subject} from 'rxjs';
import {Store} from '@ngxs/store';
import {ShoppingListAction, UpdateShoppingListAction} from 'src/app/store/shopping-list/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('form', {static: false}) form: NgForm;

  ingredient$: Observable<Ingredient>;
  isEdit: boolean;
  index: number;

  constructor(private slService: ShoppingListService, private activatedRoute: ActivatedRoute, private store: Store) {

  }

  ngOnInit() {

    this.ingredient$ = this.activatedRoute.params.pipe(
      tap((params) => {
        this.isEdit = params['id'] != null;
        this.index = +params['id'];
      }),
      map((params) => +params['id']),
      map((params) => {
        if (params != null) {
          return this.slService.getIngredient(params);
        } else {
          return {name: '', amount: 0};
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

  ngOnDestroy(): void {
  }

  delete(form: NgForm) {
  }

}
