import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  //lists:Seller[]=[];
  regForm:FormGroup;
  submitted=false;
  seller:Seller;
sellerlist:Seller[];

 
 SellerId:string;
 UserName:string;
 Password:string;
 CompanyName:string;
 GSTIN:string;
 BriefDetails:string;
 PostalAddress:string;
 Website:string;
 EmailId:string;
MobileNo:string;
  

  constructor(private fromBuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.regForm=this.fromBuilder.group({
      sellerId:['',[Validators.required,Validators.pattern("^[E]?[0-9]{1,4}$")]],
      userName:['',[Validators.required,Validators.pattern("^[A-Za-z]{4,10}$")]],
      password:['',Validators.required],
      companyName:['',Validators.required],
      gstin:['',Validators.required],
      briefDetails:['',Validators.required],
      postalAddress:['',Validators.required],
      website:['',Validators.required],
      mobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      emailId:['',[Validators.required,Validators.email]],
    
   });
    
  }
     
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.regForm.valid)
    {
      alert('success!!!!!!')
      console.log(JSON.stringify(this.regForm.value));
    }
  }
   get f()
  {
    return this.regForm.controls;

  }
  onReset()
  {

    this.submitted=false;
    this.regForm.reset();
  }


  /* get f(){
    return this.formForm.controls;
  }*/
  
         

 Register()
{

      this.seller=new Seller();
      this.seller.sellerId=this.regForm.value["sellerId"];
      this.seller.userName=this.regForm.value["userName"];
      this.seller.password=this.regForm.value["password"];
      this.seller.companyName=this.regForm.value["companyName"];
      this.seller.gstin=this.regForm.value["gstin"];
      this.seller.briefDetails=this.regForm.value["briefDetails"];
      this.seller.postalAddress=this.regForm.value["postalAddress"];
      this.seller.website=this.regForm.value["website"];
      this.seller.mobileNo=this.regForm.value["mobileNo"];
      this.seller.emailId=this.regForm.value["emailId"];
      this.service.SellerRegister(this.seller).subscribe
      (
        res=>
        {
          console.log('Record Added');
        },
        err=>
        {
          console.log(err);
        }
      )
  }
}
