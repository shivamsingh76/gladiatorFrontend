import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from './Product';

@Component({
  selector: 'app-showallproducts',
  templateUrl: './showallproducts.component.html',
  styleUrls: ['./showallproducts.component.css']
})
export class ShowallproductsComponent implements OnInit {


  proList:Product[]=[];
  proForm:any;
  fb: any;
  constructor(private proSer:ProductServiceService) {}

  ngOnInit(): void {
    
    this.getProList();
    
  }
  public getProList()
  {
      this.proSer.getAllProducts().subscribe(data=>this.proList=data);
  }
}
