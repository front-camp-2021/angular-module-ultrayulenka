import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from 'src/app/services/electronics.service';
import { PagesService } from 'src/app/services/pages.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchContent = '';

  constructor (
    public search: SearchService,
    private electronics: ElectronicsService,
    private pages: PagesService
    
  ) { }

  ngOnInit (): void {
  }

  onChange (value : string) {
    this.search.changeSearchQuery(value);
    this.pages.changePage(1);
    this.electronics.getFilteredProducts();
  }
}
