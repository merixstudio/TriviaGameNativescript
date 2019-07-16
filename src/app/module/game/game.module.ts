import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { StartScreenComponent } from '~/app/module/game/containers/start-screen/start-screen.component';
import { GameRoutingModule } from '~/app/module/game/game-routing.module';
import { QuestionsComponent } from '~/app/module/game/containers/questions/questions.component';
import { ResultComponent } from '~/app/module/game/containers/result/result.component';
import { EntityDecodeModule } from '~/app/module/shared/entity-decode/entity-decode.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    GameRoutingModule,
    EntityDecodeModule,
  ],
  declarations: [
    StartScreenComponent,
    QuestionsComponent,
    ResultComponent,
  ],
})
export class GameModule { }
