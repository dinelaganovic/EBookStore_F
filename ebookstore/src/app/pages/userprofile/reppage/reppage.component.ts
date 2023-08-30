import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-reppage',
  templateUrl: './reppage.component.html',
  styleUrls: ['./reppage.component.css']
})
export class ReppageComponent {
  bookList$!:Observable<any[]>;
  orderList$!:Observable<any[]>;
  userList$!:Observable<any[]>;

  constructor(private api:BookService, private order:OrderService, private auth:AuthService){
    this.bookList$= this.api.getBookList();
    this.orderList$=this.order.GetAllOrders();
    this.userList$=this.auth.getAllUsers();
  }

  updateorder(order:number) {
    console.log(order)
      this.order.ApproveOrder(order).subscribe((res: any) => {
        // Handle the successful response here
        console.log('Response:', res);
        // You can perform further actions based on the response
      },
      (error: any) => {
        // Handle errors here
        console.error('Error:', error);//ubaci ovde ya refresh stranicu
      });
      }
}
