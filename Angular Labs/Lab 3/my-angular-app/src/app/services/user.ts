import { Injectable } from '@angular/core';

interface User {
  id: number;
  photo: string;
  name: string;
  job: string;
  bio: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      photo: 'https://icon-library.com/images/user-icon/user-icon-7.jpg',
      name: 'Mayar Mohamed',
      job: 'Frontend Developer',
      bio: 'Passionate about building UI with Angular.',
    },
    {
      id: 2,
      photo:
        'https://tse1.mm.bing.net/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      name: 'John Doe',
      job: 'Backend Developer',
      bio: 'Node.js, Express, MongoDB expert.',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
