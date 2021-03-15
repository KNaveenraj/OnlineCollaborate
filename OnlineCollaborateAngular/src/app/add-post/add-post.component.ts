import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Blog } from './blog';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers:[DatePipe]
})
export class AddPostComponent implements OnInit {


  Id!: number;
  user: any;

  constructor(private blogservice: BlogService,private route: ActivatedRoute, private userservice: UserService,private datePipe: DatePipe) { 

  }
 
  blog: Blog =new Blog();
  submitted = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.Id = +params["Id"];
        console.log(this.Id);

        this.userservice.getUser(this.Id).subscribe(
          data => {
            this.user = data;
            console.log(this.user);
          }
        )
      }


    )
    this.submitted = false;
  }

  addpostform= new FormGroup(
    {
      blogTitle: new FormControl(''),
      blogContent:new FormControl('')
    });
  
    addPost(){
      this.blog =new Blog();
      this.blog.userId=this.user.userId;
      this.blog.username=this.user.username; 
      this.blog.blogContent=this.BlogContent!.value;
      this.blog.blogTitle=this.BlogTitle!.value;
    if(this.user.role==="Admin"){
      this.blog.status="true";
    }
    else{
      this.blog.status="false";
    }
    this.submitted=true;
      console.log(this.blog.blogContent);
      this.save();
    }
    save(){
      this.blogservice.createBlog(this.blog)
      .subscribe(data=>console.log(data), error=> console.log(error));
      this.blog =new Blog();
    }

    get BlogContent(){
      return this.addpostform.get('blogContent');
    }
    get BlogTitle(){
      return this.addpostform.get('blogTitle');
    }

    addPostform(){
      this.submitted=false;
      this.addpostform.reset();
    }
}