import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiurl = 'http://your-laravel-api-url/api';

  constructor(private http: HttpClient) { }

  getExampleData(): Observable<any> {
    return this.http.get('${this.apiUrl}/example');
  }

}
