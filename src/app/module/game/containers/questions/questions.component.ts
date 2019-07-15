import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from 'tns-core-modules/data/observable';
import { RouterExtensions } from 'nativescript-angular';
import { GameService } from '~/app/module/core/service/game/game.service';

@Component({
  selector: 'tg-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  moduleId: module.id,
})
export class QuestionsComponent implements OnInit {
  private categoryId: string;
  private difficulty: string;
  private questions: any[];
  private currentQuestion: any;
  private currentQuestionIndex: number;
  private questionsAmount: number;
  private isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private gameService: GameService,
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.route.queryParams.subscribe((params) => {
      this.questionsAmount = 10;
      this.categoryId = params['categoryId'];
      this.difficulty = params['difficulty'];

      this.gameService.reset();

      this.gameService.getQuestions(this.categoryId, this.difficulty, this.questionsAmount)
        .subscribe(({ results }) => {
          this.questions = results;
          this.currentQuestionIndex = 0;
          this.currentQuestion = results[this.currentQuestionIndex];
          this.questionsAmount = results.length;
          this.isLoading = false;
        });
    });
  }

  setAnswer(event: EventData | null, answer: boolean | '') {
    this.gameService.setAnswer(
      this.currentQuestion.question,
      answer,
      JSON.parse(this.currentQuestion.correct_answer.toLowerCase()),
    );

    this.nextQuestion();
  }

  nextQuestion() {
    this.currentQuestionIndex += 1;
    this.currentQuestion = this.questions[this.currentQuestionIndex];

    if (!this.currentQuestion) {
      return this.routerExtensions.navigate(['game', 'result']);
    }
  }

  getQuestion() {
    let question: string = '';

    if (this.currentQuestion) {
      question = this.currentQuestion.question;
    }

    return question;
  }
}
