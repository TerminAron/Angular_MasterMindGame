import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register: boolean;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe(e => {
      this.register = e[0].path === 'register';
      console.log(this.register);
    });
  }

  username = '';
  password = '';
  passwordAgain = '';

  submitForm() {
    if (this.register) {
      this.api.register(this.username, this.password).subscribe(() => {
        this.router.navigateByUrl("menu");
      }, error => {
        console.error(error);
      })
    }
    else {
      this.api.login(this.username, this.password).subscribe(() => {
        this.router.navigateByUrl("menu");
      }, error => {
        console.error(error);
      })
    }
  }
}
