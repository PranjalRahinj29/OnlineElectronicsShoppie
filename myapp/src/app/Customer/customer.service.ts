import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

  url = 'http://localhost:4000/Customer'

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + '/login', body)
  }

  registerUser( customer_name:string,email: string, password: string,mobile_no:any) {
    const body = {
    customer_name:customer_name,
    email: email,
    password: password,
    mobile_no:mobile_no
    }  

    return this.http.post(this.url + '/register', body)
  }

}