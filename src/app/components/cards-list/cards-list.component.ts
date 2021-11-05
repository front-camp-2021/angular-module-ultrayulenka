import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor () { }

  ngOnInit () {
  }

}
