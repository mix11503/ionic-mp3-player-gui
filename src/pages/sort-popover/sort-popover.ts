import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SortPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sort-popover',
  templateUrl: 'sort-popover.html',
})
export class SortPopoverPage {

  constructor(private viewCtrl: ViewController) {
  }

  //it not work!
  close() {
    this.viewCtrl.dismiss();
  }
}
