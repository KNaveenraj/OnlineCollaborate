import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, Subject } from 'rxjs';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'app-deactivate-user',
  templateUrl: './deactivate-user.component.html',
  styleUrls: ['./deactivate-user.component.scss']
})
export class DeactivateUserComponent implements OnInit {
  
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any>= new Subject();

  constructor(private userservice: UserService) { }
  
  users:any;
  user: User =new User();
  activeList: any;
  isEnabled= true;


  ngOnInit(){
   this.isEnabled= true;
   this.dtOptions={
     pageLength: 6,
     stateSave: true,
     lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
     processing: true
   };
   this.userservice.activeList().subscribe((data: any) =>{
     this.users =data;
     this.dtTrigger.next(); 
   }) 
  }

  enabledUser(id: number){
    
    this.userservice.deactiveUser(id).
    subscribe(
      (data: any) =>{
        this.activeList =data;
        console.log(this.activeList);
        this.deactiveUser(id);

      },
      (error: any) => console.log(error)
    );
  }

  deactiveUserForm = new FormGroup({
    userId: new FormControl()
  });

  deactiveUser(id:number){
    this.user =new User();
    this.user.userId=id;
    this.userservice.deactiveUser(this.user.userId).subscribe(
      (    data: any) => {
      this.userservice.activeList().subscribe( (data: any) =>{
        this.users =data
        console.log(this.users)
      } )
    },
      (    error: any) => console.log(error));
  }

  get UserId() {
    return this.deactiveUserForm.get('userId');
  }

}