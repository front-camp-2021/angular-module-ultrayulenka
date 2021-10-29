import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../../interfaces';

@Component({
  selector: 'app-checkbox-options-list',
  templateUrl: './checkbox-options-list.component.html',
  styleUrls: ['./checkbox-options-list.component.scss']
})
export class CheckboxOptionsListComponent implements OnInit {

  @Input() list: Filter[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
