import {Component, OnInit} from '@angular/core';
import {RecipeService} from 'src/app/recipes/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from 'src/app/recipes/recipe.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';

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

  constructor(private fb: FormBuilder, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(param => {
      this.isEdit = !!this.activatedRoute.snapshot.url.map(value => value.path).find(value => value === 'edit');

      if (this.isEdit) {
        this.index = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.index);

      }
      this.form = this.fb.group(this.recipe);

    });

  }

  save() {
    if (this.isEdit) {
      this.recipeService.update(+this.index, this.form.value);
    } else {
      this.recipeService.save(this.form.value);

    }

  }

}
