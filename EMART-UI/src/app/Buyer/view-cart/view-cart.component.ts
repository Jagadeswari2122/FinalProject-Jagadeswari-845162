import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart } from 'src/app/Models/cart';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  item:Items
  viewForm:FormGroup;
  cart:Cart;
  cartlist:Cart[];
    constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) { 
  
      this.service.ViewCart().subscribe(res=>
        {
          this.cart=res;
          console.log(this.cart)
        },
        err=>{
          console.log(err);
        })
    }
  
    ngOnInit() 
    {   }
  
    Buy(item:Items){
      console.log(item);
      this.item=item;
      localStorage.setItem('item',JSON.stringify(this.item));
      this.route.navigateByUrl('/buyer/buy-product');
  }
  
  
    Delete(cartid:string)
    {
       console.log(cartid);
       this.service.Deletefromcart(cartid).subscribe(
        res=>{
        console.log("Deleted from cart");
        alert('Deleted from cart');
      },
      err=>
      {
        console.log(err);
      }
      )
     }
  }