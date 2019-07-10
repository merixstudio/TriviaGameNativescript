import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/default',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('~/app/module/tabs/tabs.module').then(m => m.TabsModule),
  },
  {
    path: 'game',
    loadChildren: () => import('~/app/module/game/game.module').then(m => m.GameModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
