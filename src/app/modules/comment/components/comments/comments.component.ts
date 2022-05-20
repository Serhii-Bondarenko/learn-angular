import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IComment} from '../../interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route
      .data
      .subscribe(({comments}) => this.comments = comments)
  }

}
