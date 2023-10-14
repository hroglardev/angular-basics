import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
// import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-angular-app';
  isChanged = false;
  products: Product[] = [];
  constructor(private http: HttpClient) {}
  isChanged = false;
  products: Product[] = [];
  constructor(private http: HttpClient) {}

  changeTitle() {
    this.title = 'The title has been changed';
    this.isChanged = !this.isChanged;
    this.isChanged = !this.isChanged;
  }

  changeTitleBack() {
    this.title = 'my-first-angular-app';
    this.isChanged = !this.isChanged;
  }

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
    this.isChanged = !this.isChanged;
  }

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
