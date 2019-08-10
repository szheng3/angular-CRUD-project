import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListComponent} from 'src/app/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingResolverService} from 'src/app/shopping-list/shopping-resolver.service';


const routes: Routes = [
  {
    path: '', component: ShoppingListComponent, children: [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopplingListRoutingModule { }
