import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from './components/posts/posts.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostDetailsResolver, PostResolver} from './services';
import {ActivateGuard} from './services/guards/activate.guard';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canActivate: [
      ActivateGuard
    ],
    resolve: {
      posts: PostResolver
    }
  },
  {
    path: ':id',
    component: PostDetailsComponent,
    resolve: {
      post: PostDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
