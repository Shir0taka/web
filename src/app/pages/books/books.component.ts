import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent{
  exampleData: any[] = [];
  
  constructor() {}
  
  onButtonClick(): void {
    
  }
}
