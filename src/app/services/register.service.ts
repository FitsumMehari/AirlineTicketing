import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(username: any, password: any) {
    // const user = {
    //   name: username,
    //   password: password,
    // };

    var formData = new FormData();

    formData.append('name', username);
    formData.append('password', password);

    const newuser = JSON.stringify(formData);
    this.http.post('http://localhost:3000/employees', formData).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
