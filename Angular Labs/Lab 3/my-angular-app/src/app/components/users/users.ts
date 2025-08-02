import { Component, effect, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/user';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class UsersComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  users = signal<User[]>([]);

  constructor() {
    effect(() => {
      this.userService.getUsers().subscribe((data) => this.users.set(data));
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/user', id]);
  }

  deleteUser(id: number) {
    const updated = this.users().filter((u) => u.id !== id);
    this.users.set(updated);
  }
}
