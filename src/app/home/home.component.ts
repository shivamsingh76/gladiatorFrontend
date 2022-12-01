import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HomeServicesService } from '../services/home.services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  HomeForm:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
