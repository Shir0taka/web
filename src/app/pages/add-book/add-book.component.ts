import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})

export class AddBookComponent{
  exampleData: any[] = [];
  
  constructor() {}
  
  onButtonClick(): void {
    
  }
}
