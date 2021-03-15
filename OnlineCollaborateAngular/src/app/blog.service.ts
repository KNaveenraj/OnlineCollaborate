import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Blog } from './add-post/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl='http://localhost:8080/api/';
  constructor(private http:HttpClient){ }

  getBlogList(): Observable<Array<Blog>>{
     return this.http.get<Array<Blog>>(`${this.baseUrl}`+`blog-list`);
  }

  createBlog(blog: Blog): Observable<object>{
    return this.http.post(`${this.baseUrl}`+`save-blog`,blog);
  }
  
  deleteBlog(blogId:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-blog/${blogId}`,{ responseType: 'text' });
  }

  getBlog(blogId:number): Observable<Blog>{
    return this.http.get<Blog>(`${this.baseUrl}/blog/${blogId}`);
  }

  updateBlog(blogId:number, value:any): Observable<Object>{
    return this.http.post(`${this.baseUrl}/update-blog/${blogId}`,value);
  }
 
}