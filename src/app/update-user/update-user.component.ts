import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['../app.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user: User;
  public users: User[];

  constructor(private service: UserService, private route: Router) {
    this.user = new User();
  }
 
  updateUser(){
   return this.service.updateUser(this.user).subscribe(data => {
       this.user = new User();
       this.route.navigate(['/getAllUsers']);
    });
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe(data=>{
    this.users=data;
    });
  }

}
