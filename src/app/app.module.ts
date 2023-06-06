import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FilterResultComponent } from './components/filter-result/filter-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FilterComponent,
    EmployeesComponent,
    FilterResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[SharedModule],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
