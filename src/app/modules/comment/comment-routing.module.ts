import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentDetailsResolver, CommentResolver} from './services';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {
      comments: CommentResolver
    }
  },
  {
    path: ':id',
    component: CommentDetailsComponent,
    resolve: {
      comment: CommentDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
