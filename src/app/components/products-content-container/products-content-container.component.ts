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

  constructor (private service: ElectronicsService) { }

  ngOnInit(): void {
    this.service.getFilteredProducts();
  }

  getProducts () {
    return this.service.products;
  }

  getTotal () {
    return this.service.totalFound;
  }

  onChangeSidebarOpenStatus () {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
