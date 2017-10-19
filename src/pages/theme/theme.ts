import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the TrackMorePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class themePage {

  constructor(private viewCtrl: ViewController) {
  }

  //it not work!
  close() {
    this.viewCtrl.dismiss();
  }

}
