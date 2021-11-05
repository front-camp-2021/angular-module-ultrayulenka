import { Component, OnInit, Input } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-double-slider',
  templateUrl: './double-slider.component.html',
  styleUrls: ['./double-slider.component.scss']
})
export class DoubleSliderComponent implements OnInit {

  @Input() min : number = 0;
  @Input() max : number = 0;
  @Input() from : number = this.min;
  @Input() to : number = this.max;
  @Input() prefix : string = '';
  @Input() step : number = 1;

  options: Options = {
    floor: this.min,
    ceil: this.max,
    step: this.step,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return `${value} ${this.prefix}`;
        case LabelType.High:
          return `${value} ${this.prefix}`;
        default:
          return `${value} ${this.prefix}`;
      }
    }
  };

  constructor() { 
  }

  ngOnInit(): void {
    this.options = {
      floor: this.min,
      ceil: this.max,
      step: this.step,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return `${value} ${this.prefix}`;
          case LabelType.High:
            return `${value} ${this.prefix}`;
          default:
            return `${value} ${this.prefix}`;
        }
      }
    }
  }

}
