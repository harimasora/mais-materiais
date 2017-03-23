import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {CategoryPage} from "../category/category";
import {CategoryModel} from "../../app/models/category-model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: FirebaseListObservable<CategoryModel[]>;

  constructor(public navCtrl: NavController, af: AngularFire) {
    this.categories = af.database.list('/categories', CategoryModel);
  }

  pushPage(item: CategoryModel) {
    this.navCtrl.push(CategoryPage, { "CATEGORY_MODEL": item})
  }

}
