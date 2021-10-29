import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  templateUrl: './main-heading.component.html',
  styleUrls: ['./main-heading.component.scss']
})
export class MainHeadingComponent implements OnInit {
  isSidebarOpen = true;
  @Input() total: number = 0;

  constructor () { 
  }

  ngOnInit(): void {
  }

}
