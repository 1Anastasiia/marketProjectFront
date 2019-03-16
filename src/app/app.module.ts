import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { BannerComponent } from './banner/banner.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {Product} from '../models/Product';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { RegistrationComponent } from './registration/registration.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WishesComponent } from './wishes/wishes.component';
import { UserProffileComponent } from './user-proffile/user-proffile.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

// routes interface
const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'category/:categoryId', component: ProductsByCategoryComponent},
  {path: 'products/:id', component: SingleProductComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'wishes', component: WishesComponent},
  {path: 'proffile', component: UserProffileComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SingleProductComponent,
    BannerComponent,
    ProductsComponent,
    CategoryComponent,
    ProductsByCategoryComponent,
    RegistrationComponent,
    PurchaseComponent,
    WishesComponent,
    UserProffileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
