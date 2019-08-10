import {NgModule} from '@angular/core';
import {RecipeListComponent} from 'src/app/recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from 'src/app/recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from 'src/app/recipes/recipe-list/recipe-item/recipe-item.component';
import {SharedModule} from '../shared/shared.module';
import {RecipeRoutingModule} from 'src/app/recipes/recipe-routing.module';
import {RecipesComponent} from 'src/app/recipes/recipes.component';
import {EmptyComponent} from 'src/app/recipes/empty/empty.component';
import {RecipeEditComponent} from 'src/app/recipes/recipe-edit/recipe-edit.component';
import {ShoppingListComponent} from 'src/app/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from 'src/app/shared/dropdown.directive';

@NgModule({
  declarations: [
    RecipesComponent,
    EmptyComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective

  ],
  imports: [
    SharedModule,
    RecipeRoutingModule,
  ],
  exports: [

  ],
})
export class RecipeModule {}
