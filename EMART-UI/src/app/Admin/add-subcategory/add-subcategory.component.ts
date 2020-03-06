import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Subcategory } from 'src/app/Models/subcategory';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  
  subcategoryForm:FormGroup;
  submitted=false;
  subcategory:Subcategory;
  subcategorylist:Subcategory[];
  categorylist:Category[];
  constructor(private fromBuilder:FormBuilder,private service: AdminService) { this.GetCategories(); }

  

  ngOnInit() {
    this.subcategoryForm=this.fromBuilder.group({
     
      SubcategoryName:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,15}$')]],
      // CategoryId:['',[Validators.required,Validators.pattern("^[0-9]{1,5}$")]],
      GST:['',[Validators.required,Validators.minLength(4)]],
      BriefDetails:['',Validators.required],
      CategoryName:['']

    
    });
  }

  get f()
  {
    return this.subcategoryForm.controls;

  }
  
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.subcategoryForm.valid)
    {
      alert('success!!!!!!')
      console.log(JSON.stringify(this.subcategoryForm.value));
    }
    this.Add();
  }
    onReset()
    {

    this.submitted=false;
    this.subcategoryForm.reset();
    }

   GetCategories()
   {
     this.service.ViewCategories().subscribe(res=>
      {
        this.categorylist=res;
        console.log(this.categorylist);
      },
      err=>
      {
        console.log(err);
      })
    }
    Add()
    {

      this.subcategory=new Subcategory();
      this.subcategory.SubcategoryId='SC'+Math.floor(Math.random()*100);
      this.subcategory.SubcategoryName=this.subcategoryForm.value["SubcategoryName"];
      this.subcategory.CategoryId=(this.subcategoryForm.value["CategoryName"]);
      this.subcategory.BriefDetails=this.subcategoryForm.value["BriefDetails"];
      this.subcategory.GST=this.subcategoryForm.value["GST"];
      this.service.AddSubCategories(this.subcategory).subscribe 
      (
        res=>
        {
          console.log(this.subcategory)
          console.log('Record Added');
        },
        err=>
        {
          console.log(err);
        }
      )
    }
}
