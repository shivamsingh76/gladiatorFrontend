import { Component, OnInit } from '@angular/core';
import { ProductbynameService } from 'src/app/services/productbyname.service';
import { Productbyname } from './Productbyname';

@Component({
  selector: 'app-productbyname',
  templateUrl: './productbyname.component.html',
  styleUrls: ['./productbyname.component.css']
})
export class ProductbynameComponent implements OnInit {


  productList:Productbyname[]=[];
  productForm:any;

  pname:string="";
  notFound: boolean = false;

  constructor(private proSer:ProductbynameService) { }

  ngOnInit(): void {
    
  }

  onSearch(){
    console.log("inside search"+this.pname);
    this.proSer.findByName(this.pname).subscribe((data: Productbyname[])=>this.productList=data);
  }

}
