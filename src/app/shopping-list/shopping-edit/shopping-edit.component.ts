import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {defaultIfEmpty, delay, map, tap} from 'rxjs/operators';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {Observable, of, range, Subject} from 'rxjs';

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

  constructor(private slService: ShoppingListService, private activatedRoute: ActivatedRoute) {

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

  onAddItem(inputForm: { name: string, amount: number }) {

    if (!this.isEdit) {
      this.slService.addIngredient(inputForm);

    } else {
      this.slService.updateIngredient(this.index, inputForm);
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
