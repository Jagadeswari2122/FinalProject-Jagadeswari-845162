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
      SellerId:['',[Validators.required,Validators.pattern("^[E]?[0-9]{1,4}$")]],
      UserName:['',[Validators.required,Validators.pattern("^[A-Za-z]{4,10}$")]],
      Password:['',Validators.required],
      CompanyName:['',Validators.required],
      GSTIN:['',Validators.required],
      BriefDetails:['',Validators.required],
      PostalAddress:['',Validators.required],
      Website:['',Validators.required],
      MobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      EmailId:['',[Validators.required,Validators.email]],
    
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
      this.seller.sellerId=this.regForm.value["SellerId"];
      this.seller.userName=this.regForm.value["UserName"];
      this.seller.password=this.regForm.value["Password"];
      this.seller.companyName=this.regForm.value["CompanyName"];
      this.seller.gstin=this.regForm.value["GSTIN"];
      this.seller.briefDetails=this.regForm.value["BriefDetails"];
      this.seller.postalAddress=this.regForm.value["PostalAddress"];
      this.seller.website=this.regForm.value["Website"];
      this.seller.mobileNo=this.regForm.value["MobileNo"];
      this.seller.emailId=this.regForm.value["EmailId"];
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
