import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the TrackMorePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-track-more-popover',
  templateUrl: 'track-more-popover.html',
})
export class TrackMorePopoverPage {

  constructor(private viewCtrl: ViewController) {
  }

  //it not work!
  close() {
    this.viewCtrl.dismiss();
  }

}
