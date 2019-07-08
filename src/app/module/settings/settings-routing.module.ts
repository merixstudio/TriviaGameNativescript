import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SettingsComponent } from '~/app/module/settings/containers/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule { }
