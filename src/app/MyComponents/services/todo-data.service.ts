import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'http://localhost/ng_auth/todo.php';
    return this.http.get(url);
  }

  getJsonData() {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authenticationToken: '1234',
    });

    const params = new HttpParams().set('id', '1');

    return this.http.get('https://jsonplaceholder.typicode.com/users', {
      headers: headers,
      params: params,
    });
  }
}
