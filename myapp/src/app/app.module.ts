import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './Customer/login/login.copmonent';
import { CustomerService } from './Customer/customer.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { CustomerRegisterComponent } from './Customer/register/customer.register.component';
import { CategoryAddComponent } from './category/add/category.add.component';
import { CategoryListComponent } from './category/list/category.list.component';
import { CategoryService } from './category/category.service';
import { Route, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product/add/product.add.component';
import { ProductListComponent } from './product/list/product.list.component';
import { ProductService } from './product/product.service';


const routes: Route[] = [
 
  { path: '', component: CustomerLoginComponent},
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'customer-register', component: CustomerRegisterComponent
  },
  { path: 'app-category-add', component: CategoryAddComponent
  },
  { path: 'app-category-list', component: CategoryListComponent
  },
  { path: 'app-product-add', component: ProductAddComponent
  },
  { path: 'app-product-list', component: ProductListComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    CategoryAddComponent,
    ProductAddComponent,
    ProductListComponent,
    CategoryListComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CustomerService,
    CategoryService,
    ProductService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
