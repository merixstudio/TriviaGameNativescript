import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighscoresRoutingModule } from '~/app/module/highscores/highscores-routing.module';
import { HighscoresListComponent } from '~/app/module/highscores/containers/highscores-list/highscores-list.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    HighscoresRoutingModule,
  ],
  declarations: [HighscoresListComponent],
})
export class HighscoresModule { }
