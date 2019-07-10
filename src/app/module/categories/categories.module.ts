import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CategoriesRoutingModule } from '~/app/module/categories/categories-routing.module';
import { CategoriesListComponent } from '~/app/module/categories/containers/categories-list/categories-list.component';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { CategoryButtonComponent } from '~/app/module/categories/components/category-button/category-button.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    CategoriesRoutingModule,
  ],
  declarations: [
    CategoriesListComponent,
    CategoryButtonComponent,
  ],
})
export class CategoriesModule { }
