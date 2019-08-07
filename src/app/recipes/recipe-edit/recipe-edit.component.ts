import {Component, OnInit} from '@angular/core';
import {RecipeService} from 'src/app/recipes/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from 'src/app/recipes/recipe.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {Store} from '@ngxs/store';
import {RecipesState} from 'src/app/store/recipes/recipes.state';
import {map} from 'rxjs/operators';
import {RecipesAction, UpdateRecipesAction} from 'src/app/store/recipes/recipes.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  private recipe = new Recipe('', '', '', []);
  private isEdit = true;
  form = new FormGroup({});
  private index: number;

  constructor(private fb: FormBuilder, private store: Store, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(param => {
      this.isEdit = !!this.activatedRoute.snapshot.url.map(value => value.path).find(value => value === 'edit');

      if (this.isEdit) {
        this.index = +param['id'];
        this.store.select(RecipesState.getRecipe).pipe(map(findOne => findOne(this.index))).subscribe(recipe => this.recipe = recipe);

      }
      this.form = this.fb.group(this.recipe);

    });

  }

  save() {
    if (this.isEdit) {
      this.store.dispatch(new UpdateRecipesAction(this.form.value, this.index));
      // this.recipeService.update(+this.index, this.form.value);
    } else {
      this.store.dispatch(new RecipesAction(this.form.value));
    }
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});

  }

}
