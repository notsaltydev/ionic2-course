import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: { category, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams) {

  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use this approach
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
}
