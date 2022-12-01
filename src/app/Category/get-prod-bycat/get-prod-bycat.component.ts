import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product/Product';
import { CategotyService } from 'src/app/services/categoty.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';
import 'rxjs/add/observable/throw';



@Component({
  selector: 'app-get-prod-bycat',
  templateUrl: './get-prod-bycat.component.html',
  styleUrls: ['./get-prod-bycat.component.css']
})
export class GetProdBycatComponent implements OnInit {
  prodByCat: Product[] = [];
  categoryId: number = 0;
  notFound: boolean = false;
  no: number | undefined;

  constructor(private catSer: CategotyService, private router: Router) { }

  ngOnInit(): void {
  }
  onSearch() {
    console.log("inside search" + this.categoryId);
    this.catSer.getProdBycat(this.categoryId).subscribe((data: Product[]) => (this.prodByCat = data));

    //this.catSer.getAllCategory().subscribe((data: Category[]) => (this.categoryList = data));

}

}
