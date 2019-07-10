import { Component, Input, OnInit } from '@angular/core';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'tg-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.css'],
  moduleId: module.id,
})
export class CategoryButtonComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() color: string;
  @Input() row: string;
  @Input() col: string;
  @Input() categoryId: string;

  constructor() { }

  ngOnInit() {
  }

  handleTap(args: GestureEventData) {
    console.log('Navigate to game, category id: ', this.categoryId);
  }
}
