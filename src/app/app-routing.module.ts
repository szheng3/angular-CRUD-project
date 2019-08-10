import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from 'src/app/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingResolverService} from 'src/app/shopping-list/shopping-resolver.service';
import {MainPageComponent} from 'src/app/main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
  },
  {
    path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule',
  },
  {
    path: 'shoppingList', loadChildren: './shopping-list/shoppling-list.module#ShopplingListModule'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
