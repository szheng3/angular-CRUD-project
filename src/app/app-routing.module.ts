import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from 'src/app/recipes/recipes.component';
import {ShoppingListComponent} from 'src/app/shopping-list/shopping-list.component';
import {EmptyComponent} from 'src/app/recipes/empty/empty.component';
import {RecipeDetailComponent} from 'src/app/recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from 'src/app/recipes/recipe-edit/recipe-edit.component';
import {ShoppingEditComponent} from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingResolverService} from 'src/app/shopping-list/shopping-resolver.service';

const routes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
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
  {
    path: 'shoppingList', component: ShoppingListComponent, children: [
      {
        path: '', component: ShoppingEditComponent,
      },
      {
        path: ':id', component: ShoppingEditComponent,
      },
    ],
    resolve: {
      ingredient: ShoppingResolverService,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
