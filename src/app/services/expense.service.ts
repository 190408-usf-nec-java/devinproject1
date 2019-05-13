import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Expense } from '../classes/expense';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenseStatusSubject = new Subject<number>();
  public  $expenseStatus = this.expenseStatusSubject.asObservable();
  private response;
  private expenses = new Array<Expense>();
  constructor(private httpClient: HttpClient) { }
  public fetchExpenses(): void {
    this.httpClient.get('http://localhost:8080/ex/expense', {
      observe: 'response'
      }).pipe(map(response => response.body as Array <Expense>))
      .subscribe(response => {
        this.expenseStatusSubject.next(200);
        response.forEach(element => {
          this.expenses.push(element);
        });
      }, err => {
        this.expenseStatusSubject.next(err.status);
      });
  }
  public getExpenses(): any {
    return this.expenses;
  }
  public updateStatus(expense: Expense) {
    this.httpClient.post('http://localhost:8080/ex/expense', expense, {
      observe: 'response'
    }).subscribe(response => {
      this.expenseStatusSubject.next(200);
      if(response.status !== 200) {
        const index = this.expenses.indexOf(expense);
        this.expenses[index].status = 'pending';
      }
    });
  }
  public sendExpense(expense: Expense) {
    console.log(expense);
    this.httpClient.post('http://localhost:8080/ex/create', expense, {
      observe: 'response'
    }).subscribe(response => {
      console.log(response);
      this.expenseStatusSubject.next(200);
    });
  }
  public clearExpenses() {
    this.expenses = new Array <Expense>();
  }
}
