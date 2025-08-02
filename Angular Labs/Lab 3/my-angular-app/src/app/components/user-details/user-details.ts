import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-details',
  imports: [AsyncPipe],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css'],
})
export class UserDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userService = inject(UserService);

  user$!: Observable<User>;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.user$ = this.userService.getUserDetailsById(id);
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
