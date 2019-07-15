import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { StartScreenComponent } from '~/app/module/game/containers/start-screen/start-screen.component';
import { QuestionsComponent } from '~/app/module/game/containers/questions/questions.component';

export const routes: Routes = [
  {
    path: '',
    component: StartScreenComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GameRoutingModule { }
