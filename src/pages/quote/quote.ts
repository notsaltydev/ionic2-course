import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(private viewCtrl: ViewController) {
  }

  onClose() {
    this.viewCtrl.dismiss();
  }
}
