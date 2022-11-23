import { RequestService } from './service/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employee_app';

  employee: any;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getAll().subscribe((item: any) => {
      console.log(item);
      this.employee = item;
    });
  }
}
