import { RequestService } from './service/request.service';
import { Component, OnInit } from '@angular/core';
import { Employees } from './model/employees.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employee_app';

  _employesArray: Employees[] = [];

  id: number | undefined;

  employee: Employees | undefined;

  message = '';

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

  updateInfo(id: any): void {
    this.requestService.update(id, this._employesArray).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
