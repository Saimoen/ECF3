import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/model/employees.model';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  _employesArray: Employees[] = [];

  id: number | undefined;

  employee: Employees | undefined;

  employeeToUpdate = {
    id: '',
    name: '',
    last_name: '',
    email: '',
    job_title: '',
  };

  // Service permettant de séparer la logique et les appels HTTP
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    // A l'initiation de l'application va chercher la liste d'employée
    this.requestService.getAll().subscribe((item: any) => {
      console.log(item);
      this._employesArray = item;
    });
  }

  deleteItem(id: any) {
    this.requestService.delete(id).subscribe(
      (data) => {
        console.log(data);
        // this will return a new array of employees after removing the employee given by the id
        this._employesArray = this._employesArray.filter(
          (employee) => employee.id !== id
        );
      },
      (error) => console.log(error)
    );
  }

  refresh(): void {
    window.location.reload();
  }

  // en paramètre, on mets les informations qu'on attends

  onSubmit(formGroup: {
    name: string;
    last_name: string;
    job_title: string;
    email: string;
  }) {
    this.requestService
      .create(formGroup)
      .subscribe((response) => alert(response.name));
  }

  edit(employee: any) {
    this.employeeToUpdate = employee;
  }

  updateEmployee() {
    this.requestService
      .update(this.employeeToUpdate.id, this.employeeToUpdate)
      .subscribe((response) => console.log(response));
  }
}
