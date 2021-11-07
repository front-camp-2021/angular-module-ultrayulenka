import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from 'src/app/services/electronics.service';
import { FiltersService } from 'src/app/services/filters.service'
import { PagesService } from 'src/app/services/pages.service';
import { RangesService } from 'src/app/services/ranges.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private filters: FiltersService, 
    private electronics: ElectronicsService,
    private ranges: RangesService,
    private search: SearchService,
    private pages: PagesService
    ) { }

  ngOnInit(): void {
  }

  resetAll () {
    this.filters.reset();
    this.ranges.reset();
    this.search.reset();
    this.pages.reset();
    this.electronics.getFilteredProducts();
  }
}
