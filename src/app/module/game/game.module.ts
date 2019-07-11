import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { StartScreenComponent } from '~/app/module/game/containers/start-screen/start-screen.component';
import { GameRoutingModule } from '~/app/module/game/game-routing.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    GameRoutingModule,
  ],
  declarations: [
    StartScreenComponent,
  ],
})
export class GameModule { }