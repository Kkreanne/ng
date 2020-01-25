import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    UserListComponent,
    VendorListComponent,
    ProductListComponent,
    BoolDisplayPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
