import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';

@Component({
  moduleId: module.id,
  selector: 'tabs-page',
  templateUrl: './tabs.component.html'
})
export class TabsComponent {
  constructor(
    private page: Page,
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.page.actionBarHidden = true;

    this.routerExtension.navigate([{
      outlets:
        {
          categoriesTab: ['categories'],
          highscoresTab: ['highscores'],
          settingsTab: ['settings'],
        }
    }], {
      relativeTo: this.activeRoute,
    });
  }
}
