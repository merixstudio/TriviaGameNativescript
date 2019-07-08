import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HighscoresListComponent } from '~/app/module/highscores/containers/highscores-list/highscores-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HighscoresListComponent,
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HighscoresRoutingModule { }
