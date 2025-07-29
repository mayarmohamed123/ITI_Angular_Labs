import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  userName: string = 'Mayar';
  userImage =
    'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg';
  job: string = 'Web Developer';
  bio: string =
    'I’m a passionate web developer specializing in building responsive, user-friendly websites and web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Angular';

  hidden: boolean = false;
  removeProfile(): void {
    this.hidden = true;
    alert('Removed');
  }
}
