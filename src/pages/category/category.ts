import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoryModel} from "../../app/models/category-model";

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  title: string;
  item: CategoryModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('CATEGORY_MODEL');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.title = this.item.name || 'Categoria';
  }

}
