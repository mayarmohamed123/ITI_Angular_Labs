import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users';
import { UserDetailsComponent } from './components/user-details/user-details';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: '**', component: NotFound },
];
