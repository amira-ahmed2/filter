import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'assets/employees.json'; 
  employees !: Employee[]
  employeeSubject = new BehaviorSubject<Employee[]>([]);
  employee$ = this.employeeSubject.asObservable();
 
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<Employee[]>(this.apiUrl)
  }
  
  


  updateEmployees(emp: Employee[]) {
    this.employeeSubject.next(emp);
  }
}
