import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from 'src/app/services/electronics.service';
import { Product } from '../../../interfaces';

@Component({
  selector: 'app-products-content-container',
  templateUrl: './products-content-container.component.html',
  styleUrls: ['./products-content-container.component.scss']
})
export class ProductsContentContainerComponent implements OnInit {
  isSidebarOpen = false;
  products: any;

  constructor (private service: ElectronicsService) { }

  ngOnInit(): void {
    this.service.getAllProducts()
    .subscribe(products => {
      this.products = [...products]
    })
  }

  onChangeSidebarOpenStatus () {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}