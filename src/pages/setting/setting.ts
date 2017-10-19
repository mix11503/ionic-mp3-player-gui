import { Component } from '@angular/core';
import { NavController ,PopoverController} from 'ionic-angular';

import { themePage } from '../theme/theme';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class settingPage {

  constructor(public navCtrl: NavController ,private popoverCtrl: PopoverController) {

  }

  presentSort(myEvent) {
    let popover = this.popoverCtrl.create(themePage);
    popover.present({
      ev: myEvent
    });
  }

}
