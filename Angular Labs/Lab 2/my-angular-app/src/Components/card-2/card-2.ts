import { Component, inject } from '@angular/core';
import { Users, User } from '../../Services/users';

@Component({
  selector: 'app-card-2',
  templateUrl: './card-2.html',
  styleUrl: './card-2.css',
  standalone: true,
})
export class Card2 {
  usersService = inject(Users);
  users: User[] = [];

  constructor() {
    this.users = this.usersService.getUsers();
  }

  remove(index: number): void {
    this.usersService.removeUser(index);
    this.users = this.usersService.getUsers();
  }
}
