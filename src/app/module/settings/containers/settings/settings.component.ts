import { Component } from '@angular/core';
import { SettingsService } from '~/app/module/core/service/settings/settings.service';
import { TextField } from 'tns-core-modules/ui/text-field';
import { EventData } from 'tns-core-modules/data/observable';
import { Switch } from 'tns-core-modules/ui/switch';

@Component({
  selector: 'tg-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id,
})
export class SettingsComponent {

  constructor(
    private settingsService: SettingsService,
  ) { }

  onTextChange(args: EventData, name: string) {
    const textField = <TextField>args.object;

    this.settingsService[name] = textField.text;
  }

  onCheckedChange(args: EventData, name: string) {
    const element = <Switch>args.object;

    this.settingsService[name] = element.checked;
  }

}
