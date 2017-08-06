import {Component} from '@angular/core';
import {NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {
  }


  onToggle(toggle: Toggle) {
    console.log(toggle);
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    this.settingsService.isAltBackground();
  }

}
