import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: 'edit-employee/:id', component: EditEmployeeComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
