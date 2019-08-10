import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopplingListRoutingModule } from './shoppling-list-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {ShoppingListComponent} from 'src/app/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from 'src/app/shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShopplingListRoutingModule
  ]
})
export class ShopplingListModule { }
