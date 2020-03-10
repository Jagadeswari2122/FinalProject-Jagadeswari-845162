import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/services/seller.service';
//import { CONNREFUSED } from 'dns';

@Component({
  selector: 'app-view-seller-profile',
  templateUrl: './view-seller-profile.component.html',
  styleUrls: ['./view-seller-profile.component.css']
})
export class ViewSellerProfileComponent implements OnInit {

  itemForm:FormGroup;
  submitted=false;
  seller:Seller;
  sellerlist:Seller[];
  constructor(private fromBuilder:FormBuilder,private service: SellerService) {
    let sid= localStorage.getItem('sellerId')
    console.log(sid);
    this.service.ViewProfile("1").subscribe(res=>
    {
      console.log(res);
    this.seller=res;
    console.log("get");
      console.log(this.seller);
    console.log('Id Found');
    //console.log(res);
    this.itemForm.patchValue(
      {
       
      sellerId:sid,
      userName:this.seller.userName,
        password:this.seller.password,
      companyName:this.seller.companyName,
        gstin:this.seller.gstin,
        briefDetails:this.seller.briefDetails,
        postalAddress:this.seller.postalAddress,
        website:this.seller.website,
        emailId:this.seller.emailId,
        mobileNo:this.seller.mobileNo   
      }
    )
  },
  err=>
  {
    console.log(err);
  }
)

   

   }

  ngOnInit() {
   
    this.itemForm=this.fromBuilder.group({
        sellerId:[''],
        userName:[''],
      password:[''],
      briefDetails:[''],
      companyName:[''],
      gstin:[''],
      postalAddress:[''],
      emailId:[''],
      mobileNo:[''],
      website:['']

    });
  }

  onSubmit()
  {
    this.submitted=true;
   
}
get f()
{
  return this.itemForm.controls;
}
onReset()
{
this.submitted=false;
this.itemForm.reset();
}
}