import { Component } from '@angular/core';
import { AddBookService } from '../../services/add-book/add-book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent {
  bookName: string = '';
  bookAuthor: string = '';
  bookPages: number = 0;
  bookPrice: number = 0;

  constructor(private addBookService: AddBookService) {}

  addNewBook() {
    this.addBookService.addBook(this.bookName, this.bookAuthor, this.bookPages, this.bookPrice)
      .subscribe((response) => {
        console.log('Response recieved: ', response);
      }, (error) => {
        console.log('Response lost: ', error);   
      });
  }
}
