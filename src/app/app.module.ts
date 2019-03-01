import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CartModule} from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ShoppingListModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
