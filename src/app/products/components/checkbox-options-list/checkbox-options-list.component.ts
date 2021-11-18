import { Component, Input } from '@angular/core';
import { Filter } from '../../../core/models';
import { FiltersService } from '../../../core/services/filters.service'

@Component({
  selector: 'app-checkbox-options-list',
  templateUrl: './checkbox-options-list.component.html',
  styleUrls: ['./checkbox-options-list.component.scss']
})
export class CheckboxOptionsListComponent {

  @Input() list: Filter[] = [];

  constructor (private filters: FiltersService) { }

  checkIfSelected (value : string) {
    return this.filters.selected.includes(value);
  }

  changeChecked (value : string) {
    if(this.filters.selected.includes(value)) {
      this.filters.removeFilter(value);
    } else {
      this.filters.addFilter(value);
    }
  }

}
