import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['../app.component.css']
   
})
export class CreateUserComponent {
  public user: User;
  constructor(private service:UserService, private router:Router) { 
    this.user = new User();
  }
createUser(){
  this.service.createUser(this.user).subscribe(data=>{
    this.user = new User();
    this.router.navigate(['/getAllUsers']);
  });
}
}
