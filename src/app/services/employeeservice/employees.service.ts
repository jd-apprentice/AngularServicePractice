import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl: string = 'https://hub.dummyapis.com/employee?';

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getNumberOfEmployees(number: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + `noofRecords=${number}&idStarts=1001`);
  }

  constructor(private http: HttpClient) {}
}

