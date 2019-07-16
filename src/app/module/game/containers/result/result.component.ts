import { Component, OnInit } from '@angular/core';
import { GameService } from '~/app/module/core/service/game/game.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'tg-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  moduleId: module.id,
})
export class ResultComponent implements OnInit {
  private answers: any[];
  private points: any;

  constructor(
    private gameService: GameService,
    private routerExtensions: RouterExtensions,
  ) { }

  ngOnInit() {
    this.answers = this.gameService.getAnswers();
    this.points = this.gameService.getPoints();
  }

  navigateToCategories() {
    const navigationOptions: any = {
      clearHistory: true,
      animated: false,
      skipLocationChange: true
    };

    return this.routerExtensions.navigate( ['tabs', 'default'], navigationOptions);
  }
}
