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

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
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

  updateInfo(id: any): void {
    this.requestService.update(id, this._employesArray).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
