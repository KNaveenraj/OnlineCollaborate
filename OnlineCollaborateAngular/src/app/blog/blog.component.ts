import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Blog} from '../add-post/blog';
import { BlogService } from '../blog.service';

// @ts-ignore
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog!: Blog;
  blogId!: number;

  constructor(private router: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.blogId = params['id'];
    });

    this.blogService.getBlog(this.blogId).subscribe((data:any) => {
      this.blog = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }

}
