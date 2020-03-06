import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Items } from '../Models/items';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';

const Requestheaders={headers:new HttpHeaders({'content-Type':'application/json',})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:51586/Item/'
  constructor(private http:HttpClient) { }
  public AddItem(item:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItem',JSON.stringify(item),Requestheaders);
  }


public ViewItems():Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'ViewItems',Requestheaders);
  }
  public GetCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetCategories',Requestheaders);
  }
  
  public GetSubCategories( catid:string):Observable<Subcategory[]>
  {
    return this.http.get<Subcategory[]>(this.url+'GetSubCategories/'+catid);
  }
  public DeleteItem(itemid:string):Observable<any>
{
  
  return this.http.delete<any>(this.url+'DeleteItem/'+itemid,Requestheaders);

}
public UpdateItem(item:Items):Observable<any>
{
  return this.http.put<any>(this.url+'UpdateItem/',JSON.stringify(item),Requestheaders);
}
public GetItem(id:string) : Observable<Items>
{
  return this.http.get<Items>(this.url+'GetItem/'+id,Requestheaders)
}



}
