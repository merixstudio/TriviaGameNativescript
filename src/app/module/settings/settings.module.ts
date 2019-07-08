import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SettingsComponent } from '~/app/module/settings/containers/settings/settings.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SettingsRoutingModule } from '~/app/module/settings/settings-routing.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    SettingsRoutingModule,
  ],
  declarations: [
    SettingsComponent,
  ],
})
export class SettingsModule { }
