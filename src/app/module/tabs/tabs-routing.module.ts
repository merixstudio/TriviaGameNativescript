import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { TabsComponent } from '~/app/module/tabs/containers/tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'default', component: TabsComponent, children: [
      {
        path: 'categories',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/module/categories/categories.module').then(m => m.CategoriesModule),
        outlet: 'categoriesTab',
      },
      {
        path: 'highscores',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/module/highscores/highscores.module').then(m => m.HighscoresModule),
        outlet: 'highscoresTab',
      },
      {
        path: 'settings',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/module/settings/settings.module').then(m => m.SettingsModule),
        outlet: 'settingsTab',
      },
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
