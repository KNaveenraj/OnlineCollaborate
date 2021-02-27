import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  
  private baseUrl = 'http://localhost:8080/api/';  

  constructor(private http:HttpClient) { }

  getUserList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'user-list');  
  }  
  
  createUser(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-user', user);  
  }  
  
  deleteUser(user_id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-user/${user_id}`, { responseType: 'text' });  
  }  
  
  getUser(user_id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/student/${user_id}`);  
  }  
  
  updateUser(user_id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/update-student/${user_id}`, value);  
  }  
    
}
