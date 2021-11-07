import { Component, OnInit, Input } from '@angular/core';
import { Filter } from '../../../interfaces';
import { FiltersService } from 'src/app/services/filters.service'
import { ElectronicsService } from 'src/app/services/electronics.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-checkbox-options-list',
  templateUrl: './checkbox-options-list.component.html',
  styleUrls: ['./checkbox-options-list.component.scss']
})
export class CheckboxOptionsListComponent implements OnInit {

  @Input() list: Filter[] = [];

  constructor (
    private filters: FiltersService, 
    private electronics : ElectronicsService,
    private pages : PagesService) { }

  ngOnInit(): void {
  }

  checkIfSelected (value : string) {
    return this.filters.selected.includes(value);
  }

  changeChecked (value : string) {
    if(this.filters.selected.includes(value)) {
      this.filters.removeFilter(value);
    } else {
      this.filters.addFilter(value);
    }

    this.pages.changePage(1);
    this.electronics.getFilteredProducts();
  }

}
