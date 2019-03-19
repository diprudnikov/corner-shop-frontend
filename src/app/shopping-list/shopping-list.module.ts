import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [ShoppingListComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ShoppingListComponent]
})
export class ShoppingListModule {
}
