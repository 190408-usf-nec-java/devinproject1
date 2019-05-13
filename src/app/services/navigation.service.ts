import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // navList: Array<string> = new Array('Login');
  private loggedIn: boolean;
  constructor() { }
  getLoggedIn(): boolean {
    return this.loggedIn;
  }
  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }
}
