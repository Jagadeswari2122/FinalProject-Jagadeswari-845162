import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './Buyer/buyer/buyer.component';
import { SearchComponent } from './Buyer/search/search.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { ViewBuyerProfileComponent } from './Buyer/view-buyer-profile/view-buyer-profile.component';
import { ViewSellerProfileComponent } from './Seller/view-seller-profile/view-seller-profile.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
//import { Accounts } from './Models/accounts';
import { LoginComponent } from './Accounts/login/login.component';
import { RegisterSellerComponent } from './Accounts/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Accounts/register-buyer/register-buyer.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { HomeComponent } from './Accounts/home/home.component';
import { ViewcategoriesComponent } from './Admin/viewcategories/viewcategories.component';
import { ViewsubcategoriesComponent } from './Admin/viewsubcategories/viewsubcategories.component';


const routes: Routes = [
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buyer',component:BuyerComponent},
    {path:'search',component:SearchComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'purchase-history',component:PurchaseHistoryComponent},
    {path:'view-buyer-profile',component:ViewBuyerProfileComponent},
    {path:'buy-product',component:BuyProductComponent}
  ]},

   
    {path:'seller',component:SellerComponent,children:[
      {path:'seller',component:SellerComponent},
      {path:'add-items',component:AddItemsComponent},
      {path:'view-items',component:ViewItemsComponent},
      {path:'view-reports',component:ViewReportsComponent},
      {path:'view-seller-profile',component:ViewSellerProfileComponent}
      ]},

      {path:'admin',component:AdminComponent,children:[
        {path:'admin',component:AdminComponent},
        {path:'add-category',component:AddCategoryComponent},
        {path:'add-subcategory',component:AddSubcategoryComponent},
        {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
        {path:'daily-report',component:DailyReportComponent},
        {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
        {path:'viewcategories',component:ViewcategoriesComponent},
        {path:'viewsubcategories',component:ViewsubcategoriesComponent}
     
        
      ]},
      {path:'home',component:HomeComponent,children:[
      

      {path:'login',component:LoginComponent},
      {path:'register-seller',component:RegisterSellerComponent},
      {path:'register-buyer',component:RegisterBuyerComponent},
      
      ]}, 

   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
