import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string="https://localhost:7143/api";

  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]> {

    return this.http.get<any>(this.baseUrl+ '/Book');
  }

  getAutorList():Observable<any[]> {

    return this.http.get<any>(this.baseUrl+ '/Autor');
  }
  getIzdavacList():Observable<any[]> {

    return this.http.get<any>(this.baseUrl+ '/Izdavac');
  }
}
