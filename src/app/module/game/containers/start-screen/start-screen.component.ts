import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DifficultyType } from '~/app/module/core/entity/difficulty/difficulty-type.enum';
import { RouterExtensions } from 'nativescript-angular';
import { ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';

@Component({
  selector: 'tg-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css'],
  moduleId: module.id,
})
export class StartScreenComponent implements OnInit {
  private difficultyType = DifficultyType;
  private categoryId: string;
  private difficulty: string;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
    this.difficulty = this.difficultyType.MEDIUM;

    this.route.queryParams.subscribe((params) => {
      this.categoryId = params['categoryId'];
    })
  }

  changeDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  startGame() {
    const navigationExtras: ExtendedNavigationExtras = {
      queryParams: {
        categoryId: this.categoryId,
        difficulty: this.difficulty,
      }
    };
    this.routerExtensions.navigate( ['game', 'questions'], navigationExtras);
  }
}
