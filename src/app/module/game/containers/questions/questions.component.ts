import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'tns-core-modules/ui/button';
import { EventData } from 'tns-core-modules/data/observable';
import { RouterExtensions } from 'nativescript-angular';
import { GameService } from '~/app/module/core/service/game/game.service';
import { SettingsService } from '~/app/module/core/service/settings/settings.service';
import { Question } from '~/app/module/core/entity/question/question';

@Component({
  selector: 'tg-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  moduleId: module.id,
})
export class QuestionsComponent implements OnInit, OnDestroy {
  private categoryId: string;
  private difficulty: string;
  private questions: Question[];
  private currentQuestion: Question;
  private currentQuestionIndex: number;
  private questionsAmount: number;
  private isLoading: boolean;
  private intervalRef: number;
  private columns: string;
  private countdownPercent: number;
  private preview: boolean;
  private timeCountdownLimit: number;
  private delayTime: number;
  private timeCountdown: boolean;
  private delay: boolean;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private gameService: GameService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this.timeCountdownLimit = this.settingsService.timeCountdownLimit;
    this.delayTime = this.settingsService.delayTime;
    this.timeCountdown = this.settingsService.timeCountdown;
    this.delay = this.settingsService.delay;

    this.route.queryParams.subscribe((params) => {
      this.questionsAmount = this.settingsService.questionsAmount;
      this.categoryId = params['categoryId'];
      this.difficulty = params['difficulty'];

      this.gameService.reset();

      this.gameService.getQuestions(this.categoryId, this.difficulty, this.questionsAmount)
        .subscribe(({ results }) => {
          this.setProgressbarWidth(100);

          this.questions = results;
          this.currentQuestionIndex = 0;
          this.currentQuestion = results[this.currentQuestionIndex];
          this.questionsAmount = results.length;
          this.isLoading = false;

          if (this.timeCountdown) {
            this.runCountdown();
          }
        });
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalRef);
  }

  setProgressbarWidth(percent) {
    this.columns = percent + '*,' + (100 - percent) + '*';
  }

  runCountdown() {
    const totalTime = this.timeCountdownLimit / 10;
    let countDownTime = this.timeCountdownLimit / 10;
    this.countdownPercent = 100;

    this.intervalRef = setInterval(() => {
      countDownTime = countDownTime - 1;
      this.countdownPercent = (countDownTime * 100) / totalTime;

      this.setProgressbarWidth(this.countdownPercent);
      if (this.countdownPercent < 0) {
        clearInterval(this.intervalRef);
        this.setAnswer(null, '', 0);
      }
    }, 10);
  }

  setAnswer(event: EventData | null, answer: boolean | '', timeout: number = 1000) {
    if (this.preview) return;

    clearInterval(this.intervalRef);
    this.preview = true;
    let ref;

    if (event) {
      ref = <Button>event.object;
      ref.class = 'answer-button selected';
    }

    this.gameService.setAnswer(
      this.currentQuestion.question,
      answer,
      JSON.parse(this.currentQuestion.correct_answer.toLowerCase()),
    );

    if (!this.delay) {
      timeout = 0;
    }

    setTimeout(() => {
      this.nextQuestion();

      if (event) {
        ref.class = 'answer-button';
      }
    }, timeout);
  }

  nextQuestion() {
    this.preview = false;
    this.currentQuestionIndex += 1;
    this.currentQuestion = this.questions[this.currentQuestionIndex];

    if (!this.currentQuestion) {
      return this.routerExtensions.navigate(['game', 'result']);
    }

    if (this.timeCountdown) {
      this.runCountdown();
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
