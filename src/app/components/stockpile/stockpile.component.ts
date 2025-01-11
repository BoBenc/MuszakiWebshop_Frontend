import { Component } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-stockpile',
  host: {
    class: "wrapper"
  },
  templateUrl: './stockpile.component.html',
  styleUrl: './stockpile.component.css'
})
export class StockpileComponent {
  products:any = []
  newProduct:any = {
    category: "",
    description: "",
    id: 0,
    name: "",
    price: 0.00
  }
  operations = ""
  add_button = ""
  update_button = ""
  delete_button = ""
  columns:any = []

  constructor(private base:BaseService, private config:ConfigService) {
    this.base.getProducts().subscribe(
      (res:any) => {
        this.products = Object.keys(res || {}).map(
          key => ({key, ...res[key]})
        )
      }
    )
    
    this.config.getContent().subscribe(
      (content) => {
        this.operations = content.operations
        this.add_button = content.add_button
        this.update_button = content.update_button
        this.delete_button = content.delete_button
        this.columns = content.columns
      }
    )
  }

  addProduct() {
    this.base.addProduct(this.newProduct)
    this.newProduct = {
      category: "",
      description: "",
      id: 0,
      name: "",
      price: 0.00
    }
  }

  updateProduct(product:any) {
    this.base.updateProduct(product)
  }

  deleteProduct(product:any) {
    this.base.deleteProduct(product)
  }
}