import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-delete-by-user-id',
  templateUrl: './delete-by-user-id.component.html',
  styleUrls: ['../app.component.css']
})
export class DeleteByUserIdComponent implements OnInit {

  constructor(private service: UserService, private router: Router) {

  }

  public user: User;
  public users: User[]=[];
  public userId: number;

  deleteByUserId() {
    return this.service.deleteByUserId(this.userId).subscribe(data => {
      this.user = data;
      this.users.pop;
      this.router.navigate(['/getAllUsers']);
    })
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
