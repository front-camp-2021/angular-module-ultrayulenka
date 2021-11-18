import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  @Input() total: number = 0;
  @Input() isSidebarOpen = false;

  @Output() changeSidebarOpenStatus: EventEmitter<void> = new EventEmitter;

  constructor() { }

}
