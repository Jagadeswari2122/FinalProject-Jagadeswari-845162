import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClient, HttpClientModule}from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
//import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { BuyerComponent } from './Buyer/buyer/buyer.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { LoginComponent } from './Accounts/login/login.component';
import { RegisterSellerComponent } from './Accounts/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Accounts/register-buyer/register-buyer.component';
import { ViewBuyerProfileComponent } from './Buyer/view-buyer-profile/view-buyer-profile.component';
import { ViewSellerProfileComponent } from './Seller/view-seller-profile/view-seller-profile.component';
import { HomeComponent } from './Accounts/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AccountService } from './services/account.service';
import { AdminService } from './services/admin.service';



import { ViewcategoriesComponent } from './Admin/viewcategories/viewcategories.component';
import { ViewsubcategoriesComponent } from './Admin/viewsubcategories/viewsubcategories.component';
import { SellerService } from './services/seller.service';



@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
   // ViewProfileComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    DailyReportComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    ViewBuyerProfileComponent,
    ViewSellerProfileComponent,
    HomeComponent,

    
    
    ViewcategoriesComponent,
    ViewsubcategoriesComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule               
  
  ],
  providers: [AccountService,AdminService,SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
