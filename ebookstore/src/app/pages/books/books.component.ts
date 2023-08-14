import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  bookList$!:Observable<any[]>;

  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.bookList$= this.service.getBookList();
  }
}
