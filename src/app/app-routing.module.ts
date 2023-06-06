import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FilterResultComponent } from './components/filter-result/filter-result.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'home', pathMatch:"full"},
    {path:'home',component : EmployeesComponent},
    {path:'result',component : FilterResultComponent},

  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
