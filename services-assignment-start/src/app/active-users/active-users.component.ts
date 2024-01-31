import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: User[];

  constructor(private usersService: UserService){}
 
  ngOnInit(): void {
    this.users = this.usersService.users;
  }
  onSetToInactive(id: number) {
    this.usersService.changeStatus(id);
  }
}
