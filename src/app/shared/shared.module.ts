import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {ShoppingListComponent} from 'src/app/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
