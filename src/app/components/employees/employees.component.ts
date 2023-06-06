import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employees: Employee[] = [];
 
  constructor(private employee: EmployeeService) {}
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employee.getEmployees().subscribe((data: any) => {
      this.employees = data.employees;
    });
  }
}
