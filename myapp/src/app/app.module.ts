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
import { SubcategoryAddComponent } from './subcategory/add/subcategory.add.component';
import { SubcategoryService } from './subcategory/subcategory.service';
import { SubCategoryListComponent } from './subcategory/list/subcategory.list.component';
import { OfferAddComponent } from './offer/add/offer.add.component';
import { OfferService } from './offer/offer.service';
import { OfferListComponent } from './offer/list/offer.list.component';
import { ShipmentAddComponent } from './shipment/add/shipment.add.component';
import { ShipmentService } from './shipment/shipment.service';
import { ShipmentListComponent } from './shipment/list/shipment.list.component';
import { ProductScreenComponent } from './productscreen/add/productscreen.add.component';
import { ProductScreenService } from './productscreen/productscreen.service';
import { ProductScreenDetails } from './productscreen/details/productscreen.details.component';
import { CartListComponent } from './cart/list/cart.list.component';
import { CartService } from './cart/cart.service';

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
  { path: 'app-subcategory-add', component: SubcategoryAddComponent
},
{ path: 'app-subcategory-list', component: SubCategoryListComponent
},
{ path: 'app-offer-add', component: OfferAddComponent
},
{ path: 'app-offer-list', component: OfferListComponent
},
{
  path:'app-shipment-add',component:ShipmentAddComponent
},
{
  path:'app-shipment-list',component:ShipmentListComponent

},
{
  path:'app-productscreen-add',component:ProductScreenComponent
},
{
  path:'details/:id',component:ProductScreenDetails
},
{
  path:'details/:id',component:ProductScreenDetails
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
    CategoryListComponent,
    SubcategoryAddComponent,
    SubCategoryListComponent,
    OfferAddComponent,
    OfferListComponent,
    ShipmentAddComponent,
    ShipmentListComponent,
    ProductScreenComponent,
    ProductScreenDetails,
    CartListComponent
    
    
    
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
    ProductService,
    SubcategoryService,
    OfferService,
    ShipmentService,
    ProductScreenService,
    CartService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
