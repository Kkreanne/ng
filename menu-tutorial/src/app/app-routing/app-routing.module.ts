import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { VendorListComponent } from '../vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from '../product/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full' },
  { path: 'users/list', component: UserListComponent },
  { path: 'vendors/list', component: VendorListComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
