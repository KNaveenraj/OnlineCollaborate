import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Blog } from '../blog';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
 
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private blogservice: BlogService) { }


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  blogs:any;
  blog: Blog =new Blog();
  deleteMessage = false;
  bloglist: any;
  isupdated = false;
 
  ngOnInit(): void {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.blogservice.getBlogList().subscribe((data) => {
      this.blogs = data;
      this.dtTrigger.next();
    })
  }

  deleteBlog(blogId: number) {
    this.blogservice.deleteBlog(blogId)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.deleteMessage = true;
          this.blogservice.getBlogList().subscribe((data: any) => {
            this.blogs = data
          })
        },
        (error: any) => console.log(error));
  }

  updatBlog(id: number) {
    this.blogservice.getBlog(id)
      .subscribe(
        (data: any) => {
          this.bloglist = data;
          console.log(this.bloglist);
        }),
        (error:any) => console.log(error);
  }

  blogupdateform = new FormGroup({
    blogTitle: new FormControl(),
    blogContent: new FormControl(),  
  });

  updateBlog() {
    this.blog = new Blog();
    this.blog.blogTitle=this.BlogTitle!.value;
    this.blog.blogContent=this.BlogContent!.value;

    this.blogservice.updateBlog(this.blog.blogId, this.blog).subscribe(
      data => {
        this.isupdated = true;
        this.blogservice.getBlogList().subscribe(data => {
          this.blogs = data
        })
      },
        error => {
          console.log(this.blogs);
          console.log(error)});
      }

get BlogTitle()
{
  return this.blogupdateform.get("blogTitle");
}

get BlogContent()
{
  return this.blogupdateform.get("blogContent");
}
          changeisUpdate() {
            this.isupdated = false;
          }
}

