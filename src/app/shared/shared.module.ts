import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableEmployeesComponent } from './components/table-employees/table-employees.component';


@NgModule({
  declarations: [

     TableEmployeesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
   
    TableEmployeesComponent
  ]
})
export class SharedModule { }
