import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl="https://localhost:7143/api/Order";
  private baseUrl1="https://localhost:7143/api/Order/";

  constructor(private http:HttpClient) { }
  addOrder(orderObj: any){
    return this.http.post<any>(`${this.baseUrl}`, orderObj)
  }
  getOrderByUId(id: number): Observable<any[]> {
    const url = `${this.baseUrl1}${id}`;
   // console.log('URL zahteva:', url); 
    return this.http.get<any[]>(url);
  }
  GetAllOrders(){
  const url = `${this.baseUrl}`;
  return this.http.get<any[]>(url);
 }
 ApproveOrder(id:number){
  return this.http.put(this.baseUrl+ `/${id}/odobriti`,id);
}
}
