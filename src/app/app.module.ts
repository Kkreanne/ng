import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './core/menu/menu.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreateComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MenuComponent,
    ActorCreateComponent,
    ActorDetailComponent,
    ActorEditComponent,
    ActorListComponent,
    CreditListComponent,
    CreditDetailComponent,
    CreditCreateComponent,
    CreditEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
