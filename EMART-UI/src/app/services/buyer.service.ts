import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import{Observable} from "Rxjs";
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { Cart } from '../Models/cart';
import { TransactionHistory } from '../Models/transaction-history';

const Requestheaders={headers:new HttpHeaders({'content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem('token')})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
 
 
 
  url:string='http://localhost:51586/Buyer/'
  constructor(private http:HttpClient) {  }

  public SearchItems(name:string) : Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'SearchItems/'+name,Requestheaders)
  }


  public BuyItem(transactionhistory:TransactionHistory):Observable<TransactionHistory[]>
  {
    return this.http.post<TransactionHistory[]>(this.url+'BuyItem/',transactionhistory,Requestheaders);
  }
  
  public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'EditProfile',Requestheaders);
  }
  public ViewProfile(id:string) : Observable<Buyer>
   {
     return this.http.get<Buyer>(this.url+'ViewProfile/'+id,Requestheaders)
   }

  public TransactionHistory(tid:string):Observable<any>
  {
    return this.http.post<any>(this.url+'TransactionHistory/'+tid,Requestheaders);
  }
  
  public GetCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'GetCategories',Requestheaders);
  }


  public GetSubCategories(sid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetSubCategories',Requestheaders);
  }
 

   public Addtocart(cartobj:Cart) :Observable<Cart>
  {
    return this.http.post<Cart>(this.url+'Addtocart',cartobj,Requestheaders);
   }

   public Deletefromcart(cartid:string) :Observable<Cart>
  {
    return this.http.delete<Cart>(this.url+'Deletefromcart/'+cartid,Requestheaders);
   }
   public ViewCart(buyerid:string) :Observable<Cart>
  {
    return this.http.get<Cart>(this.url+'ViewCart/'+buyerid,Requestheaders);
   }

    public PurchaseHistory(buyerid:string) :Observable<TransactionHistory>
  {
    return this.http.get<TransactionHistory>(this.url+'TransactionHistory/'+buyerid,Requestheaders);
   }

}


