import { Component, OnInit } from '@angular/core';
import { GameService } from '~/app/module/core/service/game/game.service';
import { RouterExtensions } from 'nativescript-angular';
import { ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';
import { Answer } from '~/app/module/core/entity/answer/answer';
import { Points } from '~/app/module/core/entity/points/points';

@Component({
  selector: 'tg-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  moduleId: module.id,
})
export class ResultComponent implements OnInit {
  private answers: Answer[];
  private points: Points;

  constructor(
    private gameService: GameService,
    private routerExtensions: RouterExtensions,
  ) { }

  ngOnInit() {
    this.answers = this.gameService.getAnswers();
    this.points = this.gameService.getPoints();
  }

  navigateToCategories() {
    const navigationExtras: ExtendedNavigationExtras = {
      clearHistory: true,
      animated: false,
      skipLocationChange: true
    };

    return this.routerExtensions.navigate( ['tabs', 'default'], navigationExtras);
  }
}
