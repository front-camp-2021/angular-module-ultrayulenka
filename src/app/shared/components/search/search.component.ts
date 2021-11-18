import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchContent = '';

  constructor (public search: SearchService) { }

  ngOnInit (): void {
  }

  onChange (value : string) {
    this.search.changeSearchQuery(value);
  }
}
