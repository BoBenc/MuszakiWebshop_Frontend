import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  firebaseUrl = "https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/"
  private productsSubject = new BehaviorSubject([])

  constructor(private http:HttpClient) {
    this.loadProducts()
  }

  private loadProducts() {
    this.http.get(this.firebaseUrl+".json").subscribe(
      (res:any) => this.productsSubject.next(res)
    )
  }

  public addProduct(product:any) {
    this.http.post(this.firebaseUrl+".json", product).forEach(
      () => this.loadProducts()
    )
  }

  public getProducts() {
    return this.productsSubject
  }

  public deleteProduct(product:any) {
    this.http.delete(this.firebaseUrl+"/"+product.key+".json").forEach(
      () => this.loadProducts()
    )
  }

  public updateProduct(product:any) {
    let key = product.key
    delete product.key
    this.http.put(this.firebaseUrl+"/"+key+".json", product).forEach(
      () => this.loadProducts()
    )
  }
}