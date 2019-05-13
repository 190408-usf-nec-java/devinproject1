import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  constructor(private nav: NavigationService, private cookies: CookieService) { }

  ngOnInit() {
  }
  loggedIn(): boolean {
    return this.nav.getLoggedIn();
  }
  logOut(): void{
    this.cookies.deleteAll();
    this.nav.setLoggedIn(false);
  }
  ngOnDestroy(): void {
    this.cookies.deleteAll();
  }
}
