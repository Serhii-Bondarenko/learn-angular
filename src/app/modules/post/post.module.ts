import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostRoutingModule} from './post-routing.module';
import {PostDetailsResolver, PostResolver, PostService} from './services';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    PostResolver,
    PostDetailsResolver
  ]
})
export class PostModule {
}
