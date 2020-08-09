import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-find-by-user-id',
  templateUrl: './find-by-user-id.component.html',
  styleUrls: ['../app.component.css']
})
export class FindByUserIdComponent {
  public user: User;
  public userId: number;

  constructor(private service: UserService) { 
    this.user = new User();
  }

  findByUserId() {
    this.service.findByUserId(this.userId).subscribe(data => {
      this.user = data;
    });
  }
}
