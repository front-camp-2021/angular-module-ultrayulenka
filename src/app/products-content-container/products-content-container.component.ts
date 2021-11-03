import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-content-container',
  templateUrl: './products-content-container.component.html',
  styleUrls: ['./products-content-container.component.scss']
})
export class ProductsContentContainerComponent implements OnInit {
  isSidebarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSidebarOpenStatus () {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
