import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['../app.component.css']
})
export class GetAllUsersComponent implements OnInit {

  public users: User[];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(res=>{
      this.users=res;
    });
  }

}
