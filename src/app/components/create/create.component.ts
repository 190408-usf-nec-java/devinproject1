import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/classes/expense';
import { CookieService } from 'ngx-cookie-service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private exService: ExpenseService, private cookies: CookieService, private nav: NavigationService, private router: Router) { }
  amount: number;
  desc = ' ';
  type: string;
  reciept = '';
  message = ' ';
  ngOnInit() {
    if (!this.nav.getLoggedIn){
      this.router.navigateByUrl('login');
    }
  }
  submitExpense() {
    const author = this.cookies.get('id');
    const expense = new Expense(this.amount, author, 'no', 0, this.reciept, null, null, 'pending', null, this.type, this.desc);
    this.exService.sendExpense(expense);
    this.message = 'request submitted!';
  }
  valid(): boolean {
    return this.amount > 0 && this.desc.length > 3 && this.type !== undefined;
  }

}
