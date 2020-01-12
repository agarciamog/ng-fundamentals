import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { 
      float: right;
      color: indianred;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(form): void {
    this.authService.loginUser(form.value.userName, form.value.password);
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
