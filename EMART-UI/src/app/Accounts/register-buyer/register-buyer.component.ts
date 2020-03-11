import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  regForm:FormGroup;
  submitted=false;
  buyer:Buyer;
  buyerlist:Buyer[];


  BuyerId:string;
   UserName:string;
  Password:string;
  EmailId:string
   MobileNo:string;
  CreatedDateTime:Date;

  constructor(private fromBuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.regForm=this.fromBuilder.group({
      BuyerId:['',[Validators.required,Validators.pattern("^[E]?[0-9]{1,4}$")]],
      UserName:['',[Validators.required,Validators.pattern("^[a-zA-Z]{4,10}$")]],
      Password:['',[Validators.required]],
     MobileNo:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     EmailId:['',[Validators.required,Validators.email]]
     
    
   });
    
  }









  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.regForm.valid)
    {
      alert('sucess!!!!!!')
      console.log(JSON.stringify(this.regForm.value));
    }
    this.Register();
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

  Register()
  {
    this.buyer=new Buyer();
    this.buyer.buyerId=this.regForm.value["BuyerId"];
    this.buyer.userName=this.regForm.value["UserName"];
    this.buyer.password=this.regForm.value["Password"];
    this.buyer.mobileNo=this.regForm.value["MobileNo"];
    this.buyer.emailId=this.regForm.value["EmailId"];
   this.buyer.createdDateTime=new Date();

   
    this.service.BuyerRegister(this.buyer).subscribe
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


