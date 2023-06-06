import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent implements OnInit {


  emps!: Employee[];

  constructor(private employee: EmployeeService){
    this.veiwEmployee();
  }

  ngOnInit() {
    this.veiwEmployee()
  }
  veiwEmployee(){
    this.employee.employee$.subscribe(data => {
      this.emps = data;
      
    });
  }
}
