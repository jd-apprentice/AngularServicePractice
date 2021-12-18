import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employeeservice/employees.service';
import { Employee } from '../../models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  empleados! : Employee[];

  constructor(
    private service: EmployeesService) {}  

  ngOnInit() {
    this.service.getNumberOfEmployees(5).subscribe(data => {
      this.empleados = data;
    });
  }

}
