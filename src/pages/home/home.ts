import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tracks: Track[] = [];

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {
    this.tracks = [
                  {name: "song1", artis: "artis1", time: "3:40"},
                  {name: "song2", artis: "artis2", time: "3:40"},
                  {name: "song3", artis: "artis3", time: "3:40"},
                  {name: "song4", artis: "artis4", time: "3:40"}
                ];
  }
  presentSort(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}

export class Track{
  name: string;
  artis: string;
  time: string;
}
