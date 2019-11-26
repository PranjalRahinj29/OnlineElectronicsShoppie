import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
import * as toastr from 'toastr'
import { from } from 'rxjs';

@Component({
  selector: 'app-customer-login',
  templateUrl: './login.copmonent.html',
  styleUrls: ['./login.component.css']
})

export class CustomerLoginComponent implements OnInit {
  email = ''
  password = ''

  constructor(private customerService: CustomerService) { }

  ngOnInit() { }

  onLogin() {
    if (this.email.length == 0) {
        toastr.error('enter valid email')
    } else if (this.password.length == 0) {
      toastr.error('enter valid password')
    } else {
      this.customerService
        .login(this.email, this.password)
        .subscribe(response => {
          if (response['status'] == 'success') {
            toastr.success('authenticated')
          } else {
            toastr.error(response['error'])
            
          }
        })
    }
  }

}
