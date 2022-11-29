import { RequestService } from './../../service/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {}

  onSubmit(id: string) {
    // Get the product based on the id
    // populate the form with the product details
  }
}
