import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IComment} from '../../interfaces';
import {CommentService} from '../../services';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    if(!history.state.data) {
      this.activatedRoute.params.subscribe(({id}) => {
        this.commentService.getById(id).subscribe(value => this.commentDetails = value);
      })

      return;
    }

    this.activatedRoute.params.subscribe(value =>  {
      const { state: {data} } = history;
      this.commentDetails = data;
    });
  }

}
