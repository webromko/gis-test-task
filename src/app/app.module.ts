import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

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
import { UserModalComponent } from './components/pages/users/user-modal/user-modal.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { RepositoryCardComponent } from './components/pages/repositories/repository-card/repository-card.component';

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
    UserModalComponent,
    PaginationComponent,
    RepositoryCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    NgbModalModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
