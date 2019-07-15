import { Component, OnInit } from '@angular/core';
import { CategoryType } from '~/app/module/core/entity/category/category-type.enum';

@Component({
  selector: 'tg-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  moduleId: module.id,
})
export class CategoriesListComponent implements OnInit {
  private categoryType = CategoryType;

  constructor() { }

  ngOnInit() { }

}
