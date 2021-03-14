import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Blog } from '../blog';
import { UserService } from '../user.service';  
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private blogservice: BlogService,private route: ActivatedRoute, private userservice: UserService) { }
  blog: Blog =new Blog();
  submitted = false;
  user:any;

  ngOnInit(): void {
    
     this.submitted = false;
  }

  addpostform=new FormGroup({  
    blogTitle:new FormControl('' , [Validators.required ] ),
    blogContent:new FormControl('' , [Validators.required ] ), 
      });  


      addPost()
      {
        this.blog=new Blog();
        this.blog.blogTitle=this.BlogTitle!.value;
        this.blog.blogContent=this.BlogContent!.value;
        this.blog.blogPosted=DatePipe;
        this.blog.status="false";
        this.blog.noOfLikes=0;
        this.blog.noOfViews=0;
        this.blog.noofComments=0;
        this.blog.userId=this.user.userId;
        this.blog.username=this.user.username;
     
        this.submitted = true;  
     
      this.save(); 
      }

      save() {  
        this.blogservice.createBlog(this.blog)  
          .subscribe(data => console.log(data), error => console.log(error));  
        this.blog = new Blog();  
      } 

      get BlogTitle(){  
        return this.addpostform.get('blogTitle');  
      } 

      get BlogContent(){  
        return this.addpostform.get('blogContent');  
      } 

      addpostForm(){  
        this.submitted=false;  
        this.addpostform.reset();  
      }  
}
