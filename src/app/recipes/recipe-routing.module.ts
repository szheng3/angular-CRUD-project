import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from 'src/app/recipes/recipes.component';
import {EmptyComponent} from 'src/app/recipes/empty/empty.component';
import {RecipeEditComponent} from 'src/app/recipes/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from 'src/app/recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      {
        path: '', component: EmptyComponent,
      },
      {
        path: 'new', component: RecipeEditComponent,
      },
      {
        path: ':id', component: RecipeDetailComponent,
      },
      {
        path: ':id/edit', component: RecipeEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
