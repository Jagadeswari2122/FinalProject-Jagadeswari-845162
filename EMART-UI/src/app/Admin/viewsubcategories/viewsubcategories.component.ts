import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Subcategory } from 'src/app/Models/subcategory';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-viewsubcategories',
  templateUrl: './viewsubcategories.component.html',
  styleUrls: ['./viewsubcategories.component.css']
})
export class ViewsubcategoriesComponent implements OnInit {
  viewsubcatForm:FormGroup;
  submitted=false;
viewsubcategory:Subcategory;
viewsubcategoryList:Subcategory[];

constructor(private fromBuilder:FormBuilder,private service:AdminService) { 
    this.service.ViewSubCategories().subscribe(res=>
      {
        this.viewsubcategoryList=res;
        console.log(this.viewsubcategoryList)
      },
      err=>{
        console.log(err);
      })
    }
    
  



  ngOnInit(){
    this.viewsubcatForm=this.fromBuilder.group({
       
      // CategoryName:[''],
       SubcategoryName:[''],  
       BriefDetails:[''],
       GST:['']
       
 
   });
 }

 Delete(subcatid:string)
    {
      this.service.DeleteSubCategories(subcatid).subscribe
  (
    res=>
    {
      console.log('Record Deleted');
      alert("Do u want to delete");
      alert("Record Deleted");
    },
    err=>
    {
      console.log(err);
    }
  )
}






}