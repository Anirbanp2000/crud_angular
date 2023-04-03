import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  deleteEmployee1(id: number) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = "http://localhost:8006/api/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}`, employee);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
