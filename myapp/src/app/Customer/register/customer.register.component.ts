import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer.register.component.html',
  styleUrls: ['./customer.register.component.css']
})

export class CustomerRegisterComponent implements OnInit {
  customer_name=''
  email = ''
  password = ''
  mobile_no = 0

  constructor(
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() { }

  onRegister() {
    if (this.customer_name.length == 0) {
      toastr.error('enter valid customername')
    } else if (this.email.length == 0) {
      toastr.error('enter valid email')
    } else if (this.password.length == 0) {
      toastr.error('enter valid password')
    } else {
      this.customerService
        .registerUser(this.customer_name, this.email, this.password,this.mobile_no)
        .subscribe(response => {
          if (response['status'] == 'success') {
            toastr.success('registered successfully')
                     } else {
            toastr.error(response['error'])
          }
        })
    }
  }
}
