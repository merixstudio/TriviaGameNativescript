import { Component, Input, OnInit } from '@angular/core';
import { GestureEventData } from 'tns-core-modules/ui/gestures';
import { RouterExtensions } from 'nativescript-angular';
import { NavigationExtras } from '@angular/router';

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

  constructor(
    private routerExtensions: RouterExtensions,
  ) { }

  ngOnInit() {
  }

  handleTap(args: GestureEventData) {
    const view = args.view;
    view.animate({
      scale: { x: 1.3, y: 1.3 },
      duration: 100,
    })
      .then(() => view.animate({
        scale: { x: 1, y: 1 },
        duration: 100,
      }))
      .then(() => {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            categoryId: this.categoryId,
          }
        };
        this.routerExtensions.navigate( ['game'], navigationExtras);
      })
  }
}
