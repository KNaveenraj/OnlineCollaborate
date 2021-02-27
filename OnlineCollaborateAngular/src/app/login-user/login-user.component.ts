import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(private userservice:UserService) { }
  user : User=new User();  
  submitted = false;  
   
  ngOnInit(): void {
    this.submitted=false; 
  }

  loginForm: FormGroup = new FormGroup({
  username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
  password:new FormControl('' , [Validators.required , Validators.minLength(5) ] )
  }) ;

  loginUser(_loginUser: any)
  {
    this.user=new User();
    this.user.username=this.Username?.value;
    this.user.password=this.Password?.value;
    this.save();  
  }
  save() {  
    this.userservice.getUserList()  
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
    this.user = new User();  
  }  
  
  get Username(){  
    return this.loginForm.get('username');  
  }  

  get Password(){  
    return this.loginForm.get('password');  
  }  

  loginUsersForm(){  
    this.submitted=false;  
    this.loginForm.reset();  
  }  
}

