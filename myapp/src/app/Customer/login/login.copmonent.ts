import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service'
import * as toastr from 'toastr'
//import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './login.copmonent.html',
  styleUrls: ['./login.component.css']
})

export class CustomerLoginComponent implements OnInit {
  [x: string]: any;
  email = ''
  password = ''
  customer_id = ''
  rememberme=false

  constructor(private router:Router,
    private customerService: CustomerService) { }

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
            console.log(this.rememberme)
            sessionStorage['login_status']='1'
            sessionStorage['customer_id']=response['data']['customer_id']
            this.router.navigate(['/app-category-list'])

          } else {
            toastr.error(response['error'])
            
          }
        })
    }
  }

}
