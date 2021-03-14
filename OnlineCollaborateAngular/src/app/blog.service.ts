import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { PostPayload } from './add-post/post-payload';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl='http://localhost:8080/api/';
  constructor(private http:HttpClient){ }

  getBlogList(): Observable<Array<PostPayload>>{
     return this.http.get<Array<PostPayload>>(`${this.baseUrl}`+`blog-list`);
  }

  createBlog(blog: Blog): Observable<object>{
    return this.http.post(`${this.baseUrl}`+`save-blog`,blog);
  }
  
  deleteBlog(blogId:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-blog/${blogId}`,{ responseType: 'text' });
  }

  getBlog(blogId:number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/blog/${blogId}`);
  }

  updateBlog(blogId:number, value:any): Observable<Object>{
    return this.http.post(`${this.baseUrl}/update-blog/${blogId}`,value);
  }
 
}