import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/classes/expense';
import { CookieService } from 'ngx-cookie-service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomecomponent',
  templateUrl: './welcomecomponent.component.html',
  styleUrls: ['./welcomecomponent.component.css']
})
export class WelcomecomponentComponent implements OnInit, OnDestroy {
  expenses = new Array<Expense>();
  filterBy = 'All';
  options = ['pending', 'denied', 'approved'];

  constructor(private exService: ExpenseService, private cookies: CookieService, private nav: NavigationService, private router: Router) { }

  ngOnInit() {
    if (!this.nav.getLoggedIn){
      this.router.navigateByUrl('login');
    }
    this.exService.fetchExpenses();
    this.expenses = this.exService.getExpenses();
    console.log(this.expenses);
  }
  pending(item): boolean {
    return item.status === 'pending';
  }
  isFiltered(item): boolean {
    if (item.status === this.filterBy) {
      return true;
    } else if (this.filterBy === 'All') {
      return true;
    } else {
      return false;
    }
  }
  logger(event: any) {
    this.filterBy = event.target.value;
  }
  approved(item) {
    console.log(item.expenseID);
    item.status = 'approved';
    this.exService.updateStatus(item);
  }
  denied(item) {
    item.status = 'denied';
    this.exService.updateStatus(item);
  }
  ngOnDestroy(): void {
    this.exService.clearExpenses();
  }
  shown(item): boolean {
    const role = this.cookies.get('role');
    const username = this.cookies.get('id');
    if (role === '1') {
      return true;
    } else if (item.authorId === username) {
      return true;
    } else {
      return false;
    }
  }
  isManager(): boolean {
    return this.cookies.get('role') === '1';
  }
  isOwned(item): boolean {
    const username = this.cookies.get('id');
    return item.authorId != username;
  }

}
