import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { UsersComponent } from './components/pages/users/users.component';
import { RepositoriesComponent } from './components/pages/repositories/repositories.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { IconComponent } from './components/common/icon/icon.component';

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
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
