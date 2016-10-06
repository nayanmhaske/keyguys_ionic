import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'list.html'
})
export class ListPage {

  selectedBrand: any;

  pagesegment:any;
  products : Array<{id:number, name: string}>;
  brands : Array<{id:number, name: string}>;
  models: Array<{id:number, name: string, image:string}>;
  modeldetails: Array<{id:number, name: string, image:string, product:string, buttons:string, frequency:string, encryption:string, battery:string}>;

  constructor(public navCtrl: NavController, navParams: NavParams) {

    this.pagesegment = "product";

    /// products
    this.products = [];
    this.products.push({id: 1,  name : 'GARAGE REMOTE'});
    this.products.push({id: 2, name : 'Key Housing'});
    this.products.push({id: 3, name : 'Integrated Key'});

    this.brands = [];
    this.brands.push({id: 1,  name : 'AUDI'});
    this.brands.push({id: 2,  name : 'BMW'});

    this.models = [];
    this.models.push({id: 1,  name : 'KG AUO1', image : 'img/s-l300.jpg'});
    this.models.push({id: 2,  name : 'KG AU02', image : 'img/s-l500.jpg'});
    this.models.push({id: 3,  name : 'KG AU03', image : 'img/l700.jpg'});

    this.modeldetails = [];
    this.modeldetails.push({id: 1,  name : 'KG AUO1', image : 'img/s-l300.jpg',
     product: 'Genuine', buttons : '2', frequency:'433.92MHz', encryption:'ROLLING', battery:'23A' });
    this.modeldetails.push({id: 2,  name : 'KG AUO2', image : 'img/s-l500.jpg', product: 'Genuine',
     buttons : '4', frequency:'433.92MHz', encryption:'ROLLING', battery:'23A'});
  }

  selectProduct(event, product){
      this.pagesegment = "brand";
  }

  selectBrand(event, brand) {
    this.selectedBrand = brand.name;
    this.pagesegment = "model";
  }

  selectModel(event, model){
    this.pagesegment = "modeldetail";
  }

  backTo(tab){
    this.pagesegment = tab;
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }


}
