import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    HeaderComponent,
    PostComponent,
    CommentComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {
            path: 'posts',
            component: PostsComponent,
          },
          {
            path: 'post-details/:id',
            component: PostDetailsComponent
          },
          {
            path: 'comment-details/:id',
            component: CommentDetailsComponent
          },
          {
            path: 'comments',
            component: CommentsComponent
          },
          {
            path: 'users/:id',
            component: UserDetailsComponent
          },
          {
            path: '',
            component: UsersComponent
          }
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
