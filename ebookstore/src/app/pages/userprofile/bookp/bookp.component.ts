import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { JwtHelperService } from '@auth0/angular-jwt';
interface Order{
  kolicina:number,
  adresa:string,
  telefon:string,
  user_id:number,
  book_id:number
}
@Component({
  selector: 'app-bookp',
  templateUrl: './bookp.component.html',
  styleUrls: ['./bookp.component.css']
})
export class BookpComponent implements OnInit{
  userInfo:any;
  token:any;
  user_id:number;
  getBookId:any;
  bookData:any;
  bookList$!:Observable<any[]>;
  autorList$!:Observable<any[]>;
  izdavacList$!:Observable<any[]>;
  form:FormGroup;
  isBVisible=true;
  isCardVisible=false;
  public order:Order;
constructor( private param: ActivatedRoute, private api: BookService) {
  this.getBookId=this.param.snapshot.paramMap.get('id');
  this.api.getBookInfo(this.getBookId).subscribe((data) => {
    this.bookData = data;
  });
}
ngOnInit(): void {
  this.bookList$= this.api.getBookList();
  this.autorList$= this.api.getAutorList();
  this.izdavacList$=this.api.getIzdavacList();
  this.token=localStorage.getItem('token');
  const jwtHelper= new JwtHelperService();
  const dtoken1:any=jwtHelper.decodeToken(this.token);
  this.userInfo=dtoken1.unique_name;
  this.user_id=this.userInfo[0];
}
toggleCard() {
  this.isCardVisible = !this.isCardVisible;
  this.isBVisible=false;
}

OnSubmit(id:number){
  const kolicinaElement = document.getElementById("kolicina") as HTMLInputElement;
  const telefonElement = document.getElementById("telefon") as HTMLInputElement;
  const adresaElement = document.getElementById("adresa") as HTMLTextAreaElement;

  const kolicina = parseInt(kolicinaElement.value);;
  const telefon = telefonElement.value;
  const adresa = adresaElement.value;
  this.order = {
    kolicina: kolicina,
    adresa: adresa,
    telefon: telefon,
    user_id: this.user_id,
    book_id: id,
  }
  console.log(this.order)
}
}
