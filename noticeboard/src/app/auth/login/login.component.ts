import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: Router,
    private token: TokenService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    let token = this.token.getToken();
    let isLoggedIn = false;

    if (token) {
      this.auth.isUserLoggedIn(token).subscribe((res) => {
        if (res.status == 'valid') {
          if (this.token.getUser().type == 'student')
            this.route.navigate(['/student/dashboard']);
          else if (this.token.getUser().type == 'teacher')
            this.route.navigate(['/publisher/dashboard']);
        }
      });
    }
  }

  onSubmit(form: NgForm) {
    const response = this.auth
      .login({
        username: form.value.username,
        password: form.value.password,
      })
      .subscribe((res) => {
        console.log(res);
        if (res.status == 'success') {
          this.token.setUser(res.data.user);
          this.token.setToken(res.data.token);

          if (res.data.user.type == 'student')
            this.route.navigate(['/student/dashboard']);
          else this.route.navigate(['/publisher/dashboard']);
        }
      });
  }
}
