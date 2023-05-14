import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/pages/error/error.component';
import { UsersComponent } from './components/pages/users/users.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { RepositoriesComponent } from './components/pages/repositories/repositories.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'repositories/:userLogin', component: RepositoriesComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
