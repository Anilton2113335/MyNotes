import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArrayHolder } from '../classOfArray/ArrayHolder';


@Component({
  selector: 'page-viewEdit',
  templateUrl: 'viewEdit.html'
})
export class ViewEditPage {

    title: any;
    descp: any;
    date: any;
    isEditable: boolean = false;
    newDesc: string;

  constructor(public navCtrl: NavController, public navParams : NavParams, public holder : ArrayHolder){ 
      this.title =  this.navParams.get('title');
      this.descp =  this.navParams.get('descp');  
      this.date =  this.navParams.get('date');
      this.newDesc = this.navParams.get('descp');

      //console.log('test', viewDecoder(this.newDesc)); 
  }

  viewDecoder(crypt){
      var newline = String.fromCharCode(13, 10);
    return crypt.replaceAll('\\n', newline);
  }

  delete(){
      this.holder.popArrayDataInIndex(this.title, this.descp, this.date);
      this.navCtrl.pop();
  }

  edit(){
      this.isEditable = true;
  }

  save(){

    var x = JSON.stringify(this.newDesc);
    console.log(x);
    this.holder.updateIndexDescOf(this.title, this.descp, this.date, x.substring(1,x.length-1));
    this.navCtrl.pop();
  }

} 
