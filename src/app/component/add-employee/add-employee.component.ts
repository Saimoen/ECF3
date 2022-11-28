import { RequestService } from 'src/app/service/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {}

  onSubmit(formGroup: {
    name: string;
    last_name: string;
    job_title: string;
    email: string;
  }) {
    this.requestService
      .create(formGroup)
      .subscribe((response) => console.log(response));
  }
}
