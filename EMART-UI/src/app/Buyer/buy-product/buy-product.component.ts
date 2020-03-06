import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Transactionhistory } from 'src/app/Models/transactionhistory';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  transForm:FormGroup;
  transactionhistory:Transactionhistory;
  itemlist:Items[];
  item:Items
 
  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {

    this.item=JSON.parse(localStorage.getItem('item'));
  console.log(this.item);
  console.log(this.item.itemId);
  this.transForm=this.formbuilder.group({
     
      
    numberofitems:[''],
    transactiontype:[''],

  
  });
  

  }

  onSubmit()
{
  this.transactionhistory=new Transactionhistory();
  this.transactionhistory.id='I'+Math.round(Math.random()*999);
  this.transactionhistory.transactionId='T'+Math.round(Math.random()*999);
  this.transactionhistory.buyerId=localStorage.getItem('buyerid');
  this.transactionhistory.sellerId=this.item.sellerId;
  this.transactionhistory.numberOfItems=this.transForm.value["numberofitems"];
  this.transactionhistory.itemId=this.item.itemId;
  this.transactionhistory.transactionType=this.transForm.value["transactiontype"]
  this.transactionhistory.dateTime=new Date();
  this.transactionhistory.remarks=this.item.remarks;
     console.log(this.transactionhistory);
     this.service.BuyItem(this.transactionhistory).subscribe(
       res=>{
       console.log("Transaction is Successfull");
       alert('Ordered Successfully');
     })

   

}

   


}


