import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Token } from 'src/app/Models/token';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted=false;
  username:string;
    password:string;
    msg:string;
    role: any;
    token:Token;
  constructor(private formbuilder:FormBuilder,private service:AccountService,private route:Router) { }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['']
    });
  }
  onSubmit()
  {
  this.submitted=true;
  
}
get f()
{
  return this.loginForm.controls;
}
onReset()
{
this.submitted=false;
this.loginForm.reset();
}
public Validate()
{
  let username=this.loginForm.value['username'];
  let password=this.loginForm.value['password'];
  let role=this.loginForm.value['role'];
  this.token=new Token();
  // alert(username)
  // alert(role)
  if(role=='buyer')
  {
    this.service.BuyerLogin(username,password).subscribe(res=>{
      this.token=res;
      console.log(this.token);
      localStorage.setItem('token',this.token.token);
      localStorage.setItem('buyerId',this.token.buyerId);
      if(this.token.msg=='success'){
          this.route.navigateByUrl('/buyer');
      }
      else{
        alert('Invalid Credentials');
      }
    });
  }
if(role=='seller')
{
 
  this.service.SellerLogin(username,password).subscribe(res=>{
    console.log(res)
    this.token=res;
    console.log(this.token);
    console.log(this.token.sellerId);
      localStorage.setItem('token',this.token.token);
    localStorage.setItem('sellerid',this.token.sellerId);

  if(this.token.msg=='success'){
    this.route.navigateByUrl('/seller')
  }
  else{
    alert('Invalid  Credentials');
  }
});

}
if(username=="Admin" && password=="admin")
{
  localStorage.setItem('token',this.token.token);
  this.route.navigateByUrl("/admin");
}
}
}
