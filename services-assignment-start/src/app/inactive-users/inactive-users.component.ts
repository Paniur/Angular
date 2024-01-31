import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: User[];

  constructor(private usersService: UserService){}
  ngOnInit(): void {
    this.users = this.usersService.users;
  }
  onSetToActive(id: number) {
    this.usersService.changeStatus(id);
  }
}
