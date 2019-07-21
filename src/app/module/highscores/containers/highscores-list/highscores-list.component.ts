import { Component, OnInit } from '@angular/core';
import { HighscoresService } from '~/app/module/core/service/highscores/highscores.service';
import { isIOS } from 'tns-core-modules/platform';
import { Score } from '~/app/module/core/entity/score/score';

declare var UITableViewCellSelectionStyle;

@Component({
  selector: 'tg-highscores-list',
  templateUrl: './highscores-list.component.html',
  styleUrls: ['./highscores-list.component.css'],
  moduleId: module.id,
})
export class HighscoresListComponent implements OnInit {
  private highscores: Score[];

  constructor(
    private highscoresService: HighscoresService,
  ) { }

  ngOnInit() {
    this.highscores = this.highscoresService.getList();
  }

  onItemLoading(args) {
    if (isIOS) {
      const iosCell = args.ios;
      iosCell.selectionStyle = UITableViewCellSelectionStyle.None;
    }
  }
}
