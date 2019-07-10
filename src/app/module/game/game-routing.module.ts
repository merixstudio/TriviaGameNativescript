import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { StartScreenComponent } from '~/app/module/game/containers/start-screen/start-screen.component';

export const routes: Routes = [
  {
    path: '',
    component: StartScreenComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GameRoutingModule { }
