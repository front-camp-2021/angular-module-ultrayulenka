import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  templateUrl: './main-heading.component.html',
  styleUrls: ['./main-heading.component.scss']
})
export class MainHeadingComponent implements OnInit {
  
  @Input() total: number = 0;
  @Input() isSidebarOpen = false;

  @Output() changeSidebarOpenStatus: EventEmitter<void> = new EventEmitter;

  constructor () { 
  }

  ngOnInit(): void {
  }
}
