
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TabsComponent } from './containers/tabs/tabs.component';
import { TabsRoutingModule } from '~/app/module/tabs/tabs-routing.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    TabsRoutingModule,
  ],
  declarations: [
    TabsComponent
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }
