import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import{Observable} from "Rxjs";
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { Transactionhistory } from '../Models/transactionhistory';

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


  public BuyItem(transactionhistory:Transactionhistory):Observable<Transactionhistory[]>
  {
    return this.http.post<Transactionhistory[]>(this.url+'BuyItem/',transactionhistory,Requestheaders);
  }
  
  public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'EditProfile',Requestheaders);
  }
  public GetProfile(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetProfile/',Requestheaders);
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
}


