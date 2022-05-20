import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersResolver, UserDetailsResolver} from './services';
import {DeactivateGuard} from "./services/guards/deactivate.guard";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canDeactivate: [
      DeactivateGuard
    ],
    resolve: {
      users: UsersResolver
    }
  },
  {
    path: ':id',
    component: UserDetailsComponent,
    resolve: {
      user: UserDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
