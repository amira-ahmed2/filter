import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filteredUsers: Employee[] = [];
  filterForm: FormGroup;
  uniqueItems:any
  isButtonActive :boolean;
  constructor(private employee: EmployeeService) {
    this.filterForm = new FormGroup({
      name: new FormControl(''),
      salary: new FormControl(''),
      experience: new FormControl(''),
      department: new FormControl(''),
      employment_date: new FormControl(''),
    });
    this.isButtonActive = true;
  }

  ngOnInit() {
    this.getEmployees();
  }
  
  getEmployees() {
    this.employee.getEmployees().subscribe((data: any) => {
      this.employees = data.employees;
      this.uniqueItemsDep()
    });
    
  }
  uniqueItemsDep(){
   
    this.uniqueItems= new Set(this.employees.map(item => item.department))
    
  }
  

  filterUsers() {
    const name = this.name?.value?.toLowerCase();
    const salary = +this.salary?.value;
    const experience = this.experience?.value;
    const department = this.department?.value?.toLowerCase();
    const employment_date = this.employment_date?.value;

    this.filteredUsers = this.employees.filter((employees) => {
      if (name && !employees.name.toLowerCase().includes(name)) {
        return false;
      }
      if (salary && employees.salary !== salary) {
        return false;
      }
      if (experience && employees.experience !== experience) {
        return false;
      }
      if (
        department &&
        !employees.department.toLowerCase().includes(department)
      ) {
       
        return false;
      }
      if (employment_date && employees.employment_date != employment_date) {
        return false;
      }
     
      return true;
    });
    this.employee.updateEmployees(this.filteredUsers);
  }

  clearForm() {
    this.filterForm.reset();
    this.filteredUsers = this.employees;
  }

  get name() {
    return this.filterForm?.get('name');
  }
  get salary() {
    return this.filterForm?.get('salary');
  }
  get experience() {
    return this.filterForm?.get('experience');
  }
  get department() {
    return this.filterForm?.get('department');
  }
  get employment_date() {
    return this.filterForm?.get('employment_date');
  }
  toggleButton() {
    this.isButtonActive = !this.isButtonActive;
  }
}
