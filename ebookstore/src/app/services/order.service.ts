import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl="https://localhost:7143/api/Order";
  constructor(private http:HttpClient) { }
  addOrder(orderObj: any){
    return this.http.post<any>(`${this.baseUrl}`, orderObj)
  }
}
