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
  registerForm:FormGroup;
  submitted=false;
  buyer:Buyer;
  buyerlist:Buyer[];
  constructor(private fromBuilder:FormBuilder,private service: AccountService) { }



  
  ngOnInit() {
    this.registerForm=this.fromBuilder.group({
     
      // BuyerId:['',[Validators.required,Validators.maxLength(5)]],
      UserName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
      MobileNo:['',[Validators.required,Validators.pattern("^[3-9][0-9]{9}$")]],
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]],

    
    });
  }


  get f()
  {
    return this.registerForm.controls;

  }
  
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.registerForm.valid)
    {
      // alert('sucess!!!!!!')
      this.Register();
      console.log(JSON.stringify(this.registerForm.value));
    }
    
  }
    onReset()
    {

    this.submitted=false;
    this.registerForm.reset();
    }

    Register()
    {

      this.buyer=new Buyer();
      this.buyer.buyerId='B'+Math.floor(Math.random()*1000);
      this.buyer.userName=this.registerForm.value["UserName"];
      this.buyer.mobileNo=(this.registerForm.value["MobileNo"]);
      this.buyer.password=this.registerForm.value["Password"];
      this.buyer.emailId=this.registerForm.value["EmailId"];
      this.buyer.createdDateTime=new Date();
      this.service.BuyerRegister(this.buyer).subscribe 
      (
        res=>
        {
          console.log('Record Added');
          alert("Details Registered");
        },
        err=>
        {
          console.log(err);
        }
      )
    }
  
  }
