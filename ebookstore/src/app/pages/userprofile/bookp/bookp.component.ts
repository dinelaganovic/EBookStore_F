import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-bookp',
  templateUrl: './bookp.component.html',
  styleUrls: ['./bookp.component.css']
})
export class BookpComponent implements OnInit{
  getBookId:any;
  bookData:any;
  bookList$!:Observable<any[]>;
  autorList$!:Observable<any[]>;
  izdavacList$!:Observable<any[]>;
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
}

}
