import { Component, Input} from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.scss']
})
export class TableEmployeesComponent  {

  @Input() employees: Employee[] = [];
  
  trackByFn(index: number, item: any) {
    return item.id;
  }
}

