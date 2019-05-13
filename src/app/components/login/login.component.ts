import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  password = '';
  username = '';
  message = '';
  loginResponse: Subscription;
  lastStatus = 200;

  constructor(private cookieService: CookieService, private loginService: LoginService, 
              private router: Router, private nav: NavigationService) { }

  ngOnInit() {
    this.loginResponse = this.loginService.$loginStatus.subscribe( status => {
      if (status === 200) {
        this.nav.setLoggedIn(true);
        this.router.navigateByUrl('expenses');
        if (this.message){
          this.message = '';
        }
      } else if (status === 400) {
        this.message = 'That was wrong, please try again';
      } else {
        this.lastStatus = status;
      }
    });
  }
  ngAfterViewInit() {
    // this.nav.addNavOption(this.navItem);
  }
  ngOnDestroy() {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
    /*this.nav.rmNavOption(this.navItem);
    this.nav.addNavOption('Expenses');*/
  }
  valid(): boolean {
    return this.username.length > 1;
  }
  login(): void {
    this.loginService.login(this.username, this.password);
  }
}
