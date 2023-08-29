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
  autorList$!:Observable<any[]>;

  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.bookList$= this.service.getBookList();
    
    this.autorList$= this.service.getAutorList();

  }
<<<<<<< HEAD

=======
>>>>>>> 0b510758298e04b22f74a4f72fd8ed8556a02727
  showAllData(item:any) {
    this.bookList$ = item;
  }
  loggedin(){
    return localStorage.getItem('token');
<<<<<<< HEAD
  }

}
=======
  }}
>>>>>>> 0b510758298e04b22f74a4f72fd8ed8556a02727
