import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getRouteLink (index : number) : string {
    return '/' + this.getLinks().slice(0, index + 1).join('/');
  }

  getLinks () : string[] {
    return this.router.url.split('/').filter(value => value);
  }

  isCurrent (route : string) : boolean {
    return this.router.url.endsWith(route);
  }

}
