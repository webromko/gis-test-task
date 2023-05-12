import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { UsersComponent } from './components/pages/users/users.component';
import { RepositoriesComponent } from './components/pages/repositories/repositories.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { IconComponent } from './components/common/icon/icon.component';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    RepositoriesComponent,
    FavoritesComponent,
    ErrorComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
