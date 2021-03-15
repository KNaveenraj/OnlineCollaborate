import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../add-post/blog';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {


  bloglist!: Observable<Array<Blog>>;
  constructor(private router: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.bloglist = this.blogService.getBlogList();
  
  }

}
